from django.urls import path

from StudentsApp import views

urlpatterns=[
    path('login', views.login, name='student.login')
]