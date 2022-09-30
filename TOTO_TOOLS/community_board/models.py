from django.db import models
from TOTO_TOOLS.users.models import User



# Create your models here.

class Picture_Board(models.Model):
    
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
    
    title = models.CharField(max_length=100, null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='Region_Board')
    region = models.CharField(
        max_length=300, choices=REGION_CHOICE, null=True, default='NONE')

    contents = models.TextField(null=True, blank=True)
    click_hit = models.PositiveIntegerField(default=0)

    created_at = models.DateField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateField(auto_now=True, verbose_name="수정일")
    
    def __str__(self):
        return self.title
    
class Picture_comment(models.Model):
    comment = models.TextField(null=True, blank=True)
    users = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='Picture_comment_user')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정일")
    Picture_Board = models.ForeignKey(
        Picture_Board, on_delete=models.CASCADE, related_name='Picture_comment')


class Picture_Like(models.Model):
    
    users = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='Picture_like_user')
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정일")
    Picture_Board = models.ForeignKey(
        Picture_Board, on_delete=models.CASCADE, related_name='Picture_like')

class Picture_DisLike(models.Model):
    
    users = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='Region_dislike_user')
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정일")
    Picture_Board = models.ForeignKey(
        Picture_Board, on_delete=models.CASCADE, related_name='Picture_dislike')



# Create your models here.

class Job_Board(models.Model):
    
    JOB_CHOICE = (
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
    
    title = models.CharField(max_length=100, null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='Job_Board')
    job = models.CharField(
        max_length=300, choices=JOB_CHOICE, null=True, default='NONE')

    contents = models.TextField(null=True, blank=True)
    click_hit = models.PositiveIntegerField(default=0)

    created_at = models.DateField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateField(auto_now=True, verbose_name="수정일")
    
    def __str__(self):
        return self.title
    
class Job_comment(models.Model):
    comment = models.TextField(null=True, blank=True)
    users = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='Job_comment_user')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정일")
    Job_Board = models.ForeignKey(
        Job_Board, on_delete=models.CASCADE, related_name='Job_comment')


class Job_Like(models.Model):
    
    users = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='Job_like_user')
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정일")
    Picture_Board = models.ForeignKey(
        Picture_Board, on_delete=models.CASCADE, related_name='Job_like')

class Job_DisLike(models.Model):
    
    users = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='Job_dislike_user')
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정일")
    Job_Board = models.ForeignKey(
        Job_Board, on_delete=models.CASCADE, related_name='Job_dislike')
