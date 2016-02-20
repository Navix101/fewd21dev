document.getElementById('grayButton').onclick = switchToGray;
document.getElementById('whiteButton').onclick = switchToWhite;



function switchToWhite(){
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
}

function switchToGray(){
	document.body.style.backgroundColor = "gray";
	document.body.style.color = "white";
}
