from django.urls import path

from userauths import views as userauths_views
from rest_framework_simplejwt.views import TokenRefreshView # type: ignore

urlpatterns = [
    path('user/token/', userauths_views.MyTokenObtainPairView.as_view()),
    path('user/token/refresh/', TokenRefreshView.as_view()),
    path('user/register/', userauths_views.RegisterView.as_view()),
    path('user/password-reset/<email>/', userauths_views.PasswordRestEmailVerify.as_view()),
    path('user/password-change/', userauths_views.PasswordChangeView.as_view()),
    path('user/would-be-returnee/', userauths_views.WouldBeReturneeView.as_view(), name='would_be_returnee'),
    path('user/add-instance/', userauths_views.AddInstanceView.as_view(), name='add_instance'),
]
