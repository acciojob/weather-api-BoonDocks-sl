document.getElementById('weatherButton').addEventListener('click', function() {

	
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=999b280e8a2bab87c04ce16c25e1420c')
	.then(response => response.json())
	.then(data => {

		
	  var weatherDescription = data.weather[0].description;
	  var message = 'Current weather in London: '+weatherDescription;

		
	  document.getElementById('weatherData').textContent = message;
	})
	.catch(error => console.log(error)); // Handle any errors that occur during the fetch request
});