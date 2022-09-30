from rest_framework.routers import DefaultRouter
from django.urls import path, include
from . import views
from rest_framework_jwt.views import obtain_jwt_token

app_name = 'community_board'

# user Router
community_router = DefaultRouter()


urlpatterns = [
    path('', include(community_router.urls)),
    
    # Main 화면 게시판 5개리스트
    
]
