var CountryService = {
	getCountries:function(){
		var countries = [];
		var indiaC = Object.create(Country);
		indiaC.name = 'India';
		indiaC.cities = [{name:'Mumbai'}, {name:'Bangalore'}];
		countries.push(indiaC);
		var usC = Object.create(Country);
		usC.name = 'US';
		usC.cities = [{name:'Newyork'}, {name:'DC'}];
		countries.push(usC);
		return countries;
	}
	
	
};
