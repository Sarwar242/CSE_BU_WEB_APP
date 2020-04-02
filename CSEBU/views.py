from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "homepage.html")

def about(request):
    return render(request, "about.html")

def facultystuff(request):
    return render(request, "facultyandstuff.html")

def newsevent(request):
    return render(request, "newsandevents.html")

def research(request):
    return render(request, "research.html")

def campuslife(request):
    return render(request, "campuslife.html")


def login(request):
    return render(request, "login/login.html")


