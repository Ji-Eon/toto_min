from multiprocessing import context
from operator import concat
from django.shortcuts import render


# 코어 라이브러리
from django.db import IntegrityError
from django.db import connection
from django.conf import settings
from django.core.files.base import ContentFile
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, FileResponse, StreamingHttpResponse
from django.utils.datastructures import MultiValueDictKeyError
from django.db import DatabaseError, transaction
from rest_framework.viewsets import ModelViewSet
from rest_framework import status, viewsets, mixins
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListCreateAPIView,ListAPIView
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.postgres.search import SearchVector, SearchQuery
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import datetime, json
from django.http import Http404,JsonResponse

# Create your views here.

from TOTO_TOOLS.users.models import User

from TOTO_TOOLS.community_board.utils import *

  
class BoardPagenation(PageNumberPagination):
        
    """
        - 커스텀 페이지네이션
        - 페이지 당 아이템 갯수는 offset query param에 따라 결정
        - 전체 페이지 갯수와 현재 페이지 번호, 결과 데이터를 반환해주는 Response 생성
    """

    # 동적 페이지 사이즈
    # offset query params를 통해 크기 결정
    page_size_query_param = 'offset'

    # 커스텀 페이지네이션 Response
    def get_paginated_response(self, data):

        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'total_pages': self.page.paginator.count,
            'page': self.page.number,
            'results': data
        })
  


##################################################################
########### Pagination View ######################################
##################################################################
# class RegionBoardViewset(ListCreateAPIView):
    
#     queryset = Region_Board.objects.all().order_by('-id')

#     serializer_class = RegionPageserializer
#     # 커스텀 페이지네이션 클래스 지정
#     pagination_class = BoardPagenation




    
    
  
##################################################################
########### Region View ######################################
##################################################################

