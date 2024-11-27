from django.http import HttpResponse  
from rest_framework import viewsets  
from .models import WeatherData  
from .serializers import WeatherDataSerializer  

# API ViewSet for WeatherData  
class WeatherDataViewSet(viewsets.ModelViewSet):  
    queryset = WeatherData.objects.all()  
    serializer_class = WeatherDataSerializer  

# Renamed home view for the analysis section  
def analysis_home(request):  
    return HttpResponse("Welcome to the Weather Analysis app!")