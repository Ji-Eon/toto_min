# Generated by Django 2.2.19 on 2022-08-17 13:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('community_board', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='region_like',
            name='like_type',
        ),
        migrations.CreateModel(
            name='School_DisLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='생성일')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='수정일')),
                ('School_Board', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='School_dislike', to='community_board.School_Board')),
                ('users', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='School_dislike_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Region_DisLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='생성일')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='수정일')),
                ('Region_Board', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Region_dislike', to='community_board.Region_Board')),
                ('users', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Region_dislike_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Free_DisLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='생성일')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='수정일')),
                ('Free_Board', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Free_dislike', to='community_board.Free_Board')),
                ('users', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Free_dislike_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Consulting_DisLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='생성일')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='수정일')),
                ('Consulting_Board', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Consulting_dislike', to='community_board.Consulting_Board')),
                ('users', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Consulting_dislike_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
