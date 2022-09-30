import uuid
from django.db import models  # 표준 컨벤션
from django.conf import settings
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from django.utils.encoding import python_2_unicode_compatible
from django.db.models.signals import post_save
from .manager import CustomUserManager
from django.db import models


@python_2_unicode_compatible
class User(AbstractUser):

    # 저장되는 값 , 보여지는 값
    GRADE_CHOICES = (
        ('VISITOR', 'VISITOR'),
        ('DOCTORS', 'DOCTORS'),
        ('LEVEL1', 'LEVEL1'),
        ('ADMINSTRATOR', 'ADMINSTRATOR'),
    )

    SEX_CHOICE = (
        ('NO_GENDER', 'NO_GENDER'),
        ('FEMALE', 'FEMALE'),
        ('MALE', 'MALE'),
    )
    
    REGION_CHOICE = (
        ('서울특별시', '서울특별시'),
        ('경기도', '경기도'),
        ('인천광역시', '인천광역시'),
        ('강원도', '강원도'),
        ('충청북도', '충청북도'),
        ('충청남도', '충청남도'),
        ('전라남도', '전라남도'),
        ('전라북도', '전라북도'),
        ('광주광역시', '광주광역시'),
        ('경상남도', '경상남도'),
        ('경상북도', '경상북도'),
        ('제주특별자치도', '제주특별자치도'),
        ('NONE', 'NONE'),
    )
    
    SCHOOL_CHOICE = (
        ('초등학교', '초등학교'),
        ('중학교', '중학교'),
        ('고등학교', '고등학교'),
        ('특수학교', '특수학교'),
        ('NONE', 'NONE'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    is_active = models.BooleanField(default=True)

    email = models.EmailField(
        verbose_name='email',
        max_length=255,
        unique=True,
    )
    

    username = models.CharField(
        verbose_name='username',
        max_length=255,
        default='',
        null=True,
        blank=True,
        unique=False,
    )

    nickname = models.CharField(
        verbose_name='nickname',
        max_length=255,
        default='',
        null=True,
        blank=True,
    )
    

    
    region = models.CharField(
        max_length=300, choices=REGION_CHOICE, null=True, default='NONE')

    grade = models.CharField(
        max_length=300, choices=GRADE_CHOICES, null=True, default='VISITOR')

    sex = models.CharField(verbose_name='sex', max_length=300,
                           choices=SEX_CHOICE, null=True, default='NO_GENDER')

    birthday = models.DateField(null=True)
    
    school = models.CharField(
        max_length=300, choices=SCHOOL_CHOICE, null=True, default='NONE')

    phone = models.CharField('Contact Phone', max_length=20, blank=True)

    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    # createsuperuser 생성 시 입력받을 필드 목록
    REQUIRED_FIELDS = ['username', 'nickname']

    def __str__(self):
        return self.email

    # def save(self):
    #     super().save()

    #     img = Image.open(self.image.path)

    #     # image 크기 재설정
    #     if img.height > 300 or img.width > 300:
    #         output_size = (300, 300)
    #         img.thumbnail(output_size)
    #         img.save(self.image.path)
