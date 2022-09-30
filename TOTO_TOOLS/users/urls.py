from rest_framework.routers import DefaultRouter
from django.urls import path, include
from . import views
from rest_framework_jwt.views import obtain_jwt_token

app_name = 'users'

# user Router
user_router = DefaultRouter()
# user_router.register(r'', views.UserCreateViewSet)


urlpatterns = [
    path('', include(user_router.urls)),
    path('login/', views.UserLoginAPIView.as_view(), name='login'),
    path('register/', views.UserRegisterAPIView.as_view(), name='register'),
    path('register/guideline/', views.Register_Gudeline.as_view(), name='register_gugideline'),

    path('nickname_overlap/<str:nickname>/', views.Nickname_Overlap.as_view(), name='nickname'),

    path('obtain_jwt_token/',obtain_jwt_token),
    path('activate/<str:user_id>/', views.ActivateView.as_view()),

    path('profile/<str:email>/', views.Profile.as_view()),
    path('password/<str:email>/', views.ChangePasswordView.as_view()),
    path('update_profile/<str:email>/', views.UpdateProfileView.as_view()),
    path('email_overlap/<str:email>/', views.Email_Overlap.as_view()),

]