# Generated by Django 5.0.4 on 2024-05-18 09:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userauths', '0004_user_repository_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='repository_name',
            new_name='user_graph',
        ),
    ]
