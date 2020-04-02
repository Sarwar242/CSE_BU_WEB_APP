
from django.urls import path

from CSEBU import views

urlpatterns = [
    path('', views.index, name='index')
]
