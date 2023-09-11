const weatherData = document.querySelector('.weather-data');
const apiKey = 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}';
function getWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const cityName = data.name;
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;

      // Create HTML content to display the weather
      const htmlContent = `
        <h2>${cityName} Weather</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${weatherDescription}</p>
      `;

      // Update the weather-data div with the fetched data
      weatherData.innerHTML = htmlContent;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      weatherData.innerHTML = '<p>Failed to fetch weather data.</p>';
    });
}

getWeather();