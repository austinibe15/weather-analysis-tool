"""
URL configuration for weather_analysis project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin  
from django.urls import path, include  
from .views import home  # Import your home view  
from . import views  # Import views here  

urlpatterns = [  
    path('admin/', admin.site.urls),  # Admin panel route  
    path('', home, name='home'),      # Serve home page at root  
    path('weather_analysis/', views.weather_analysis, name='weather_analysis'),  # Correct path for weather analysis  
    path('about/', views.about, name='about'),  
    path('contact/', views.contact, name='contact'),   
    path('api/', include('analysis.urls')),  # Include analysis app URLs  
]