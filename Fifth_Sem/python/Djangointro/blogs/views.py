from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    # further processing
    return HttpResponse("Hello")

@login_required
def secret(request):
        return HttpResponse("Hello user you can see the secret information")

def login_view(request):
    username = "john"
    password = "password"

    user = authenticate(request, username=username, password=password)

    if user is not None:
        # Loin user
        print(user)
        login(request, user)
        # return HttpResponse("User Found")
        return HttpResponseRedirect(request.GET.get('next'))
    else:
        return HttpResponse("User Not Found")
    
def logout_view(request):
    logout(request)
    return HttpResponse("User logged out")
