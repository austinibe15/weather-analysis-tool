// script.js  

// You can add any general utility functions here  
function initialize() {  
  console.log("Page initialized");  
  // Any other initial setup code can go here  
}  

// Function to fetch weather data  
function fetchWeatherData() {  
    $.ajax({  
        url: 'http://localhost:8000/api/weather/', // Adjust the URL if necessary  
        type: 'GET',  
        dataType: 'json',  
        success: function(data) {  
            displayWeatherData(data); // Display the data on the page  
            createWeatherChart(data);  // Create a chart after fetching data  
        },  
        error: function(error) {  
            console.error("Error fetching weather data:", error);  
            $('#weather-data').html("<p>An error occurred while fetching data.</p>");  
        }  
    });  
}  

// Function to display data on the page  
function displayWeatherData(data) {  
    let htmlContent = '<h2>Weather Data</h2><ul>';  
    data.forEach(item => {  
        htmlContent += `<li>${item.date}: ${item.temperature}°C, ${item.humidity}%</li>`;  
    });  
    htmlContent += '</ul>';  
    $('#weather-data').html(htmlContent);  
}  

// Function to create a weather chart using Chart.js  
function createWeatherChart(data) {  
    const ctx = document.getElementById('weather-chart').getContext('2d');  
    const labels = data.map(item => item.date);  // Assuming data has a 'date' property  
    const temperatures = data.map(item => item.temperature);  // Assuming data has a 'temperature' property  

    const chart = new Chart(ctx, {  
        type: 'bar',  // Change this line to 'bar'
        data: {  
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],  
            datasets: [{  
                label: 'Temperature (°C)',  
                data: [0, 10, 5, 2, 20, 30, 15, 25, 35, 18, 45, 21],  
                borderColor: 'rgba(75, 192, 192, 1)',  
                fill: false,  
            }]  
        },  
        options: {  
            responsive: true,  
            scales: {  
                x: {  
                    title: {  
                        display: true,  
                        text: 'Date'  
                    }  
                },  
                y: {  
                    title: {  
                        display: true,  
                        text: 'Temperature (°C)'  
                    }  
                }  
            } 
          }     
    });  
}  

// Initialize script on document ready  
$(document).ready(function() {  
    initialize();  
    fetchWeatherData();  
});