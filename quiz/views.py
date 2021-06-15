from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    # return HttpResponse("hello")
    return render(request, 'index.html')
def register(request):
    
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username= form.cleaned_data['username']
            password=form.cleaned_data['password1']
            user= authenticate(username=username, password=password)
            login(request, user)
            return redirect ('home')

    else:
        form= UserCreationForm()
    context={'form': form}
    return render(request, 'registration/register.html', context)

@login_required
def python(request):
    return render(request, 'python.html')

@login_required
def java(request):
    return render(request, 'java.html')
@login_required
def c(request):
    return render(request, 'c.html')
@login_required
def quizpage(request):
    return render(request, 'quizpage.html')
