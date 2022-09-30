from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


@admin.register(User)
class UserAdmin(UserAdmin):
    list_display = ['id', 'username', 'email', 'grade','region', 'school',
                    'nickname', 'sex', 'birthday', 'phone', 'image', 'is_active']

    fieldsets = (
        (None, {'fields': ('email', 'password',)}),
        ('Personal Information', {'fields': (
            'username', 'grade', 'nickname', 'sex', 'region', 'school', 'birthday', 'phone', 'image', 'is_active')}),


    )
