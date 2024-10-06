from django.shortcuts import render,redirect
from django.http import HttpResponse
def hello(request):
    # return HttpResponse("Hello World")
    Context ={
        'name':'Ram',
        'address': 'BRT'
    }
    return render(request,'hello.html', Context)

def hello_name(request,name,address):
    # return HttpResponse("Hello World")
    Context ={
        'name':name,
        'address': address
    }
    return render(request,'hello.html', Context)

