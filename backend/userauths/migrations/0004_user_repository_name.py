# Generated by Django 5.0.4 on 2024-05-13 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userauths', '0003_user_otp'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='repository_name',
            field=models.CharField(max_length=100, null=True, unique=True),
        ),
    ]
