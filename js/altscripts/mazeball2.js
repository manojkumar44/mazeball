var marble = document.getElementById('m2');
var startPosX = 0;
var startPosY = 0;
var changePosX = 10;
var changePosY = 10;
var newPosX, newPosY;
var currentPos = [];

function getCurrentStartPos() {
	var m = document.getElementById('m2');
	startPosX += changePosY;
	startPosY += changePosY;
	currentPos[0] = m.style.transform = "translateX("+ startPosX + "px)";
	currentPos[1] = m.style.transform = "translateY("+ startPosY + "px)";
	return currentPos;
}


window.addEventListener("keydown", function(event) {
switch(event.keyCode) {
	//	For left arrow key
	case 37:
	//	Before we do anything, test if the marble has already been moved via the arrow keys.
	//	If it has, get the MOST RECENT translateX and translateY values. We are hoping that
	//	this function returns an array housing the values for both translateX and translateY..
	getCurrentStartPos();
	
	//	We are hoping that the above function returned the values we wanted. 
	newPosX = currentPos[0] + changePosX;
	newPosY = currentPos[1];
	let moveLeftX = marble.style.transform = "translateX(" + newPosX + "px)";
	currentPos[0] = moveLeftX;
	startPosX =(currentPos[0]);
	moveLeftX;
	break;
	
	//	For up arrow key
	case 38:
	//	do something here
	startPosY -= changePosY;
	let moveUpY = marble.style.transform = "translateY(" + startPosY + "px)";
	moveUpY;
	break;
	
	//	For right arrow key
	case 39:
	//	do something here
	startPosX += changePosX;
	let moveRightX = marble.style.transform = "translateX(" + startPosX + "px)";
	moveRightX;
	break;
	
	//	For down arrow key
	case 40:
	//	do something here
	startPosY += changePosY;
	let moveDownY = marble.style.transform = "translateY(" + startPosY + "px)";
	moveDownY;
	break;

	
}

  });
