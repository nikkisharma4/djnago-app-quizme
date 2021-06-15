from django.contrib import admin
from django.urls import path
from quiz import views


urlpatterns = [
    path("", views.index, name="home"),
    path("register", views.register, name="register"),
    path("python", views.python, name="python"),
    path("java", views.java, name="java"),
    path("c", views.c, name="c"),
    path("quizpage", views.quizpage, name='quizpage')
    
]