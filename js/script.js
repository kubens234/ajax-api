"use strict";

var url = 'https://restcountries.eu/rest/v1/name/',
	countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) {
		countryName = 'Poland';
	}
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) {
		countryName = 'Poland';
	}
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
	var row;
  	countriesList.empty();
	resp.forEach(function(item) {
   		row = $('<li>').text(item.name);
		$('<p>').text('Stolica : '+item.capital).appendTo(row);
		$('<p>').text('Liczba mieszkańców: '+item.population).appendTo(row);
		$('<p>').text('Powierzchnia: '+item.area).appendTo(row);
		$('<p>').text('Region: '+item.region).appendTo(row);
		
		row.appendTo(countriesList);
	});
}



