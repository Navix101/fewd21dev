$(document).ready(function(){

$('#submit-btn').click(function(){
	event.preventDefault();

var city = $('#city-type').val();
	$('#city-type').val('');
		city = city.toLowerCase().trim();


if(city == 'austin' || city == 'austin, tx'){
	$('body').attr('class','austin');
}

else if(city == 'la' || city == "los angeles" || city == "lax" || | city = 'los angeles, ca'){
	$('body').attr('class','la');
}

else if(city == 'new york' || city = 'nyc' || city = 'new york city' || | city = 'new york city, ny'){
	$('body').attr('class','nyc');
}

else if(city == 'sf' || city = 'san fransico' || city = 'san fransico, ca'){
	$('body').attr('class','sf');
}

else if(city == 'sydney' || city == 'sydney, au'){
	$('body').attr('class','sydney'); 
}

});

});