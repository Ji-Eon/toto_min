from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *


# class Region_Commentinline(admin.TabularInline):
#     model = Region_comment
#     extra = 1
# class Region_Likeinline(admin.TabularInline):
#     model = Region_Like
#     extra = 1
# class Region_DisLikeinline(admin.TabularInline):
#     model = Region_DisLike
#     extra = 1


# class School_Commentinline(admin.TabularInline):
#     model = School_comment
#     extra = 1

# class School_Likeinline(admin.TabularInline):
#     model = School_Like
#     extra = 1

# class School_DisLikeinline(admin.TabularInline):
#     model = School_DisLike
#     extra = 1

    
# class Consulting_Commentinline(admin.TabularInline):
#     model = Consulting_comment
#     extra = 1
    
# class Consulting_Likeinline(admin.TabularInline):
#     model = Consulting_Like
#     extra = 1

# class Consulting_DisLikeinline(admin.TabularInline):
#     model = Consulting_DisLike
#     extra = 1

# class Free_Commentinline(admin.TabularInline):
#     model = Free_comment
#     extra = 1

# class Free_Likeinline(admin.TabularInline):
#     model = Free_Like
#     extra = 1
# class Free_DisLikeinline(admin.TabularInline):
#     model = Free_DisLike
#     extra = 1


# class RegionAdmin(admin.ModelAdmin):
#     inlines = [Region_Commentinline,Region_Likeinline,Region_DisLikeinline]

#     list_display = ['id', 'title', 'user','region',
#                     'click_hit', 'created_at', 'created_at']


# class SchoolAdmin(admin.ModelAdmin):
#     inlines = [School_Commentinline,School_Likeinline,School_DisLikeinline]

#     list_display = ['id', 'title', 'user','school',
#                     'click_hit', 'created_at', 'created_at']


# class ConsultingAdmin(admin.ModelAdmin):
#     inlines = [Consulting_Commentinline,Consulting_Likeinline,Consulting_DisLikeinline]

#     list_display = ['id', 'title', 'user',
#                     'click_hit', 'created_at', 'created_at']

# class FreeAdmin(admin.ModelAdmin):
#     inlines = [Free_Commentinline,Free_Likeinline,Free_DisLikeinline]

#     list_display = ['id', 'title', 'user',
#                     'click_hit', 'created_at', 'created_at']



# admin.site.register(Region_Board, RegionAdmin)
# admin.site.register(School_Board, SchoolAdmin)
# admin.site.register(Consulting_Board, ConsultingAdmin)
# admin.site.register(Free_Board, FreeAdmin)


