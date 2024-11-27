// weatherData.js  

// Function to process raw weather data  
function processWeatherData(rawData) {  
  // First, check if rawData is an array  
  if (!Array.isArray(rawData)) {  
      console.error("Received data is not an array.", rawData);  
      return [];  
  }  

  // Transform the raw data if necessary  
  return rawData.map(item => {  
      return {  
          date: item.date || "N/A",  // Default to "N/A" if date is missing  
          temperature: item.temp || 0, // Default to 0 if temp is missing  
          humidity: item.humidity || 0  // Default to 0 if humidity is missing  
      };  
  });  
}  

// Function to prepare data for charting  
function prepareChartData(processedData) {  
  const labels = processedData.map(item => item.date);  
  const temperatures = processedData.map(item => item.temperature);  
  const humidity = processedData.map(item => item.humidity);  

  return {  
      labels: labels,  
      datasets: [  
          {  
              label: 'Temperature',  
              data: temperatures,  
              borderColor: 'rgba(255, 99, 132, 1)',  
              backgroundColor: 'rgba(255, 99, 132, 0.2)',  
              fill: true  
          },  
          {  
              label: 'Humidity',  
              data: humidity,  
              borderColor: 'rgba(54, 162, 235, 1)',  
              backgroundColor: 'rgba(54, 162, 235, 0.2)',  
              fill: true  
          }  
      ]  
  };  
}  

// Function to render the chart  
function renderWeatherChart(chartData) {  
  const ctx = document.getElementById('weather-chart').getContext('2d');  
  new Chart(ctx, {  
      type: 'line', // Change accordingly if you need other chart types  
      data: chartData,  
      options: {  
          responsive: true,  
          scales: {  
              y: {  
                  beginAtZero: true  
              }  
          }  
      }  
  });  
}  

// Example usage after fetching data  
function fetchWeatherData() {  
  // Simulate an API fetch call – replace with your actual data fetching logic  
  fetch('/api/weather-data') // Adjust the URL as needed  
      .then(response => response.json())  
      .then(rawData => {  
          const processedData = processWeatherData(rawData);  
          const chartData = prepareChartData(processedData);  
          renderWeatherChart(chartData);  
      })  
      .catch(error => {  
          console.error("Error fetching weather data:", error);  
      });  
}  

// Call the fetch function (you may want to call this on page load or based on an event)  
fetchWeatherData();