$(document).ready(function() {

	function showQuestion1(){
		$('#answer1').slideToggle();
	}
	
	function showQuestion2(){
		$('#answer2').slideToggle();
	}

	function showQuestion3(){
		$('#answer3').slideToggle();
	}
	$('#answer1').hide();
	$('#answer2').hide();
	$('#answer3').hide();
	$('#question1').click(showQuestion1);
	$('#question2').click(showQuestion2);
	$('#question3').click(showQuestion3);

});