// Replace 'your-api-key' with your actual API key from OpenWeatherMap or another weather API provider
const apiKey = 'a9cca2a3af7edabc5c2524ae40e0b3b0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const locationInput = document.getElementById('locationInput').value;

    // If location is provided, fetch weather data
    if (locationInput) {
        const url = `${apiUrl}?q=${locationInput}&appid=${apiKey}&units=metric`;

        axios.get(url)
            .then(response => {
                const weatherInfo = response.data;
                const weatherDisplay = `
                    <h3>${weatherInfo.name}, ${weatherInfo.sys.country}</h3>
                    <p>Temperature: ${weatherInfo.main.temp}°C</p>
                    <p>Weather: ${weatherInfo.weather[0].description}</p>
                    <p>Humidity: ${weatherInfo.main.humidity}%</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherDisplay;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.getElementById('weatherInfo').innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
            });
    } else {
        alert('Please enter a location.');
    }
}
