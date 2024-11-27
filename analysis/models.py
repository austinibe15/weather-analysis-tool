
# Create your models here.
from django.db import models  

class WeatherData(models.Model):  
    date = models.DateField()  
    temperature = models.FloatField()  
    humidity = models.FloatField()  
    # Add other fields as necessary  

    def __str__(self):  
        return f"{self.date}: {self.temperature}°C"