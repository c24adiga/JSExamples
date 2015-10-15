var countriesList;

var getCountries = function(){
	countriesList = CountryService.getCountries();
};

var clearCities = function(){
	 var cities   =document.getElementById('cities');
	 cities.removeChild(document.getElementsByTagName('option')[0]);
	 cities.removeChild(document.getElementsByTagName('option')[0]);

};	
	
var showCities = function(){
	var countries = document.getElementsByName('countryName');
	console.log(countries);
	if(countries[0].checked) {
		console.log(countriesList);
		addCity(countriesList[0].cities[0]);
		addCity(countriesList[0].cities[1]);
	} else {
		console.log(countriesList[1]);
		addCity(countriesList[1].cities[0]);
		addCity(countriesList[1].cities[1]);
	}
};

var addCity = function(city){
	var optionEl  = document.createElement('option');
	attchAttribute(optionEl,'name', city.name);
	attchAttribute(optionEl,'value', city.name);
	optionEl.innerHTML = city.name;
	document.getElementById('cities').appendChild(optionEl);
};

var attchAttribute = function(element, type, value) {
	element.setAttribute(type, value);
};


window.onload = function(){
		getCountries();
		var countries = document.getElementsByName('countryName');
		for(var i=0;i<countries.length;i++) {
			countries[i].addEventListener('change', function() {
				clearCities();
				showCities();
		});
		}
		showCities();

};