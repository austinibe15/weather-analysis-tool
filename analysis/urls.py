# analysis/urls.py
from django.urls import path  
from .views import analysis_home  # Import the renamed analysis home view  
from .views import WeatherDataViewSet  # Import your viewset class  

urlpatterns = [  
    path('', analysis_home, name='analysis_home'),  # Serve home page for the analysis app  
    path('weather/', WeatherDataViewSet.as_view({'get': 'list'}), name='weather_data'),  # Example API endpoint  
    # Add any additional API endpoints here  
]