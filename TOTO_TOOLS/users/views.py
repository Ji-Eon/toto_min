from rest_framework import status, viewsets, mixins
from rest_framework.decorators import api_view, APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_auth.registration.serializers import VerifyEmailSerializer
from django.http import Http404
from .models import User
from rest_framework import generics
from .permissions import IsUserOrReadOnly
from .serializers import UserSerializer, UserCreateSerializer, UserLoginSerializer, UserInfo
from django.http import JsonResponse

from django.views import View
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http              import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail               import EmailMessage
from django.utils.encoding          import force_bytes, force_text
from django.core.exceptions         import ValidationError

from django.conf import settings


# views.py
from rest_framework.exceptions import NotFound
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from allauth.account.models import EmailConfirmation, EmailConfirmationHMAC

from django.shortcuts import render

from .tokens     import account_activation_token
from TOTO_TOOLS.users import serializers


@api_view()
def null_view(request):
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view()
def complete_view(request):
    return Response("Email account is activated")


def active_message(user_id):
    return f"아래 링크를 클릭하면 회원가입 인증이 완료됩니다.\n\n 회원가입링크 : https://api.localhost/users/activate/{user_id}/ \n\n감사합니다."


class UserRegisterAPIView(generics.ListCreateAPIView):
   

    serializer_class = UserCreateSerializer
    permission_classes = [AllowAny]
    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):
        try:

            
            serialized_user = UserCreateSerializer(data=request.data)


            email = serialized_user.initial_data['email']
            username = serialized_user.initial_data['username']
            password = serialized_user.initial_data['password']
            sex = serialized_user.initial_data['sex']
            birthday = serialized_user.initial_data['birthday']
            nickname = serialized_user.initial_data['nickname']
            phone = serialized_user.initial_data['phone']

          
            
            
            user_obj = User(username = username,email = email,nickname=nickname, sex=sex, birthday=birthday,phone=phone)

            user_obj.set_password(password)
            user_obj.save()
            user    = User.objects.get(email=email)
            user_id = user.id
            
            
            # current_site = get_current_site(request)
        
            
            # # user_id 를 url_base64 로 encode 해준다
            # #uidb64       = urlsafe_base64_encode(force_bytes(user_id))            # tokens.py 에서 만들었던 token 생성기로 token 생성
            # #token        = account_activation_token.make_token(user)

          
            # # utils.py 에서 만들었던 message 를 불러온다
            # message_data = active_message(user_id)

            # mail_title = "이메일 인증을 완료해주세요"
            # mail_to    = email
            # email      = EmailMessage(mail_title, message_data, to=[mail_to])
            # email.send()

        except KeyError:
            return JsonResponse({"error"   : "KEY_ERROR"}, status=400)

        except TypeError as e:
            print(e)
            return JsonResponse({"error"   : "TYPE_ERROR"}, status=400)

        except ValidationError:
            return JsonResponse({"error"   : "VALIDATION_ERROR"}, status=400)

        except User.DoesNotExist:
            return JsonResponse({"error"   : "NON_EXIST_USER"}, status=400)
       
        return Response(username, status=200)
    
class ActivateView(APIView):
    def get(self, request, user_id):

        print('user_id user_id : ',user_id)
        User.objects.filter(id=user_id).update(is_active=True)
        return render(request, '/usr/src/app/templates/assign/index.html')
      

class UserLoginAPIView(APIView):


    serializer_class = UserLoginSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserLoginSerializer(data=data)

        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            return Response(new_data, status=200)
        return Response(serializer.errors, status=400)


class ChangePasswordView(APIView):
    def get_object(self, email):
        try :
            return User.objects.get(email=email)
        except :
            raise Http404

    def put(self, request, email):
        print(request.data,'request')
        user = self.get_object(email)
        if 'password' in request.data :
            password = request.data['password']
            print('password', not password)
            
            if(not password):
                return Response(data={"password를 입력하세요"}, status=status.HTTP_400_BAD_REQUEST)

            user.set_password(password)
            user.save()
            return Response(data={'password가 변경되었습니다.'}, status=status.HTTP_201_CREATED)
        
        return Response(data={"password가 누락되었습니다."}, status=status.HTTP_409_CONFLICT)

class UpdateProfileView(APIView):
    def get_object(self, email):
        try :
            return User.objects.get(email=email)
        except :
            raise Http404

    def put(self, request, email):
        user = self.get_object(email)
        
        if 'region' in request.data :
            region = request.data['region']

            user.region = region
            user.save()
            
        if 'school' in request.data :
            school = request.data['school']

            user.school = school
            user.save()
            
        if 'username' in request.data :
            username = request.data['username']

            user.username = username
            user.save()
             
        if 'nickname' in request.data :
            nickname = request.data['nickname']

            user.nickname = nickname
            user.save()

        if 'phone' in request.data :
            phone = request.data['phone']

            user.phone = phone
            user.save()

        if 'password' in request.data :
            password = request.data['password']

            user.password = password
            user.save()

        return Response(data={'프로필이 변경되었습니다.'}, status=status.HTTP_201_CREATED)

    
class Nickname_Overlap(APIView):
    def get_object(self, nickname):
        try :
            return User.objects.filter(nickname=nickname).exists()

        except :
            raise Http404

    def get(self, request,nickname):

        print('nickname : ',nickname)

       
        if User.objects.filter(nickname=nickname).exists() == True:
            return Response(data = '닉네임을 사용할 수 없습니다.', status=400) 
        else:
            return Response(data = '닉네임을 사용할 수 있습니다.', status=200) 


class Email_Overlap(APIView):
   
    def get_object(self, email):
        try :
            return User.objects.filter(email=email).exists()

        except :
            raise Http404
    def get(self, request,email):

        if User.objects.filter(email=email).exists() == True:
            return Response(data = '이메일을 사용할 수 없습니다.', status=400) 
        else:
            return Response(data = '이메일을 사용할 수 있습니다.', status=200) 

class Profile(APIView):
    serializer_class = UserInfo


    def get_object(self, email):
        try :
            return User.objects.get(email=email)
        except :
            raise Http404

    def get(self, request, email):
        user = self.get_object(email)
        serializer = UserInfo(user)
        
        return Response(serializer.data, status=200)
    

class Register_Gudeline(APIView):
    
    def get(self, request, **agrs):
        file = open("/usr/src/app/TOTO_TOOLS/joinAgreement.txt", "r")
        strings = file.readlines()
        print(strings)
        
        return Response(strings, status=200)