import json
import shortuuid
from rest_framework_simplejwt.views import TokenObtainPairView #type: ignore
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status
from django.shortcuts import render
from django.http import JsonResponse
from userauths.models import User, Profile
from userauths.agraph import wouldBeReturnee, add_data_to_user_graph
from userauths.serializer import MyTokenObtainPairSerializer, RegisterSerializer, UserSerializer, StringListSerializer

import logging

# Setup logger
logger = logging.getLogger(__name__)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny, )
    serializer_class = RegisterSerializer


def generate_otp():
    uuid_key = shortuuid.uuid()
    unique_key = uuid_key[:6]
    return unique_key

class PasswordRestEmailVerify(generics.RetrieveAPIView):
    permission_classes = (AllowAny, )
    serializer_class = UserSerializer



    def get_object(self):
        email = self.kwargs['email']
        user = User.objects.get(email=email)
        if user:
            user.otp = generate_otp()
            user.save()

            uidb64 = user.pk
            otp = user.otp

            link = f"http://localhost:5173/create-new-password?otp={otp}&uidb64={uidb64}"
            print(link)
        return user

class PasswordChangeView(generics.CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = UserSerializer

    def create(self, request):
        payload = request.data

        otp = payload['otp']
        uidb64 = payload['uidb64']
        password = payload['password']

        user = User.objects.get(otp=otp, id=uidb64)
        if user:
            user.set_password(password)
            user.otp = ""
            user.save()
            return Response({"message": "Password Changed Successfully"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "User Does Not Exist"}, status=status.HTTP_404_NOT_FOUND)



class WouldBeReturneeView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = StringListSerializer
    permission_classes = [IsAuthenticated,]

    def get_object(self):
        user = self.request.user
        user_graph = user.user_graph
        res = wouldBeReturnee(user_graph)
        return {"data": res}

class AddInstanceView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = StringListSerializer
    permission_classes = [IsAuthenticated,]

    def post(self, request):
        payload = request.data
        user = request.user
        user_graph = user.user_graph 
       
        try:
            # Add the triples to the user's graph
            add_data_to_user_graph(user_graph, payload)
            return JsonResponse({'status': 'success'}, status=status.HTTP_200_OK)
        except Exception as e:
           return JsonResponse({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
