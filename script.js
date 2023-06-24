document.getElementById('getWeatherButton').addEventListener('click', function () {
    var request = new XMLHttpRequest();
    var apiKey = 'https://openweathermap.org/api'; 
	

    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var response = JSON.parse(request.responseText);
            var weather = response.weather[0].main;
            document.getElementById('weatherData').textContent = 'Current weather in London: ' + weather;
        } else {
            console.error('Error occurred while fetching weather data. Status:', request.status);
        }
    };

    request.onerror = function () {
        console.error('An error occurred while making the request.');
    };

    request.send();
});
