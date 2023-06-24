document.getElementById('getWeatherButton').addEventListener('click', function () {
    var apiKey = 'https://openweathermap.org/api'; 


    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error occurred while fetching weather data. Status:', response.status);
            }
        })
        .then(function (data) {
            var weather = data.weather[0].main;
            document.getElementById('weatherData').textContent = 'Current weather in London: ' + weather;
        })
        .catch(function (error) {
            console.error('An error occurred while making the request:', error);
        });
});
