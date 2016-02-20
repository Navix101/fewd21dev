
$(document).ready(function() {
	$('#grayButton').click(switchGray);

	function switchGray (){
		$('body').css("background-color", "gray");
		console.log("I am gray!")
	}

	$('#whiteButton').click(switchWhite);

	function switchWhite (){
		$('body').css("background-color", "white");
	}
});

// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//   document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }


