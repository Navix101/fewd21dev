$( document ).ready(function() {
    $("#stopButton").click(illuminateRed);
    $("#slowButton").click(illuminateYellow);
	$("#goButton").click(illuminateGreen);

     function illuminateRed(){
     	clearLights();
     	$('#stopLight').css("background-color", "red");
     }
     
     function illuminateYellow(){
     	clearLights();
     	$('#slowLight').css("background-color", "yellow");
     }
        
        function illuminateGreen(){
     	clearLights();
     	$('#goLight').css("background-color", "green");
     }

     function clearLights(){
     	$('#stopLight').css("background-color", "black");
     	$('#slowLight').css("background-color", "black");
		$('#goLight').css("background-color", "black");
     	}

});

// document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('slowButton').onclick = illuminateYellow;
// document.getElementById('goButton').onclick = illuminateGreen;

// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "purple";
// }

// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }

// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }