# weather-analysis-tool  

## Overview  
The Weather Analysis Tool is a web application designed to analyze historical weather data. It allows users to explore climate trends and gain insights into various weather parameters through intuitive visualizations and user-friendly interactions.  

## Project Structure  
### Frontend (HTML, CSS, JavaScript)  
- **HTML**: Provides structured web pages to display data and visualizations.  
- **CSS**: Styled using Bootstrap, which is included through a CDN for responsive design and a clean interface.  
- **JavaScript**: Handles user interactions, fetches data from the backend, and updates the user interface dynamically.  
- **Chart.js**: Integrates Chart.js for visualizing historical weather data with various chart types, including line charts and bar graphs.  

### Backend (Django)  
- **Set Up Django**: The project is created using Django. You can set it up via:  
  ```bash  
  django-admin startproject weather_analysis  
  django-admin startapp analysis

##  APIs: RESTful APIs are created using Django REST Framework to serve data to the frontend, allowing JavaScript to fetch historical weather data.
Data Processing: Implementation of logic to process historical data, perform analyses (like identifying trends), and format the results for the frontend.
Database (SQLite)
Setup: SQLite is configured as the default database for development and smaller projects.
Models: Defines models in Django to represent historical weather data (e.g., Temperature, Humidity, Date, etc.).
Data Handling: Uses Django’s ORM to perform CRUD operations on weather data.
Getting Started
To get started with the Weather Analysis Tool, follow these instructions:

## Prerequisites
Python 3.x
Django
Django REST Framework
Chart.js
SQLite (default)
Installation
Clone the repository to your local machine:

## bash
git clone <repository-url>  
cd weather_analysis  
Create a virtual environment and activate it:

## bash
python -m venv venv  
source venv/bin/activate  # On Windows use `venv\Scripts\activate`  
Install the required packages:

## bash
pip install -r requirements.txt  
Run the database migrations:

## bash
python manage.py migrate  
Start the development server:

## bash
python manage.py runserver  

## Usage
Visit http://127.0.0.1:8000 in your web browser to access the Weather Analysis Tool. Start by entering a location to fetch historical weather data and visualize it

## For further enquiries contact me through email:austinibe15@gmail.com
