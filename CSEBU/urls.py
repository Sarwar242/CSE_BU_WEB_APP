
from django.urls import path

from CSEBU import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('facultystuff', views.facultystuff, name='facultystuff'),
    path('newsevent', views.newsevent, name='newsevent'),
    path('research', views.research, name='research'),
    path('campuslife', views.campuslife, name='campuslife'),
    path('login', views.login, name='login')
]
