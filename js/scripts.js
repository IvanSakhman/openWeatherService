$(document).ready(function() {
	$('#search-button').click(function() {
		var city = $('#search-input').val();
		var currentWeather = new XMLHttpRequest();
		currentWeather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=4e37f15df3a4eae9f01acb3275a1025f", false);
		currentWeather.send(null);
		var weather = JSON.parse(currentWeather.response);
		var country = weather.sys.country;
		var temperature = weather.main.temp;
		var description = weather.weather[0].description;


		$('#search-input').val("");

		$('#weather').fadeIn(500)
			.append("<div>" + ' - ' + city + ', ' + country + ': ' + temperature + '&#8451;' + ', ' + description + ';' + "</div>");
	});

	$('#clear-button').click(function() {
		$('#weather').fadeOut(500);
	});
});