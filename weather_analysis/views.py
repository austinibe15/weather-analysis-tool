from django.shortcuts import render  

def home(request):  
    return render(request, 'index.html')  # Renders your main application page  

def weather_analysis(request):  
    return render(request, 'weather_analysis.html')  # Renders the weather analysis page  

def about(request):  
    return render(request, 'about.html')  # Renders the about page  

def contact(request):  
    return render(request, 'contact.html')  # Renders the contact page