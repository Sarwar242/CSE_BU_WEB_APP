from django.shortcuts import render
from CSEBU.models import About
# Create your views here.



def index(request):
    return render(request, "homepage.html")

def about(request):
    aboutus= About.objects.get(type='csebu')
    return render(request, "about.html", {'about':aboutus})

def facultystuff(request):
    return render(request, "facultyandstuff.html")

def newsevent(request):
    return render(request, "newsandevents.html")

def research(request):
    return render(request, "research.html")

def campuslife(request):
    return render(request, "campuslife.html")

def eventcalendar(request):
    return render(request, "eventclndr.html")

def login(request):
    return render(request, "login/login.html")


