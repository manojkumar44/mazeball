var marble = document.getElementById('m2');
var topBoundary = 0;
var leftBoundary = 0;
var rightBoundary = 1200;
var bottomBoundary = 675;
var changePos = 75;

window.addEventListener("load", function() {
	marble.style.position = 'absolute';
	marble.style.top = 0;
	marble.style.left = 0;

},false);

window.addEventListener("keyup", function(event) {
switch(event.keyCode) {
	//	For left arrow key
	case 37:
	if (marble.style.left != leftBoundary + "px" ) {
	marble.style.left = parseInt(marble.style.left) - changePos + "px";
	}	else {
		event.preventDefault();
	}
	break;
	
	//	For up arrow key
	case 38:
	if (marble.style.top != topBoundary + "px" ) {
		marble.style.top = parseInt(marble.style.top) - changePos + "px";
	}	else {
		event.preventDefault();
	}
	break;
	
	//	For right arrow key
	case 39:
	if (marble.style.left != rightBoundary + "px") {
		marble.style.left = parseInt(marble.style.left) + changePos + "px";
	}	else {
		event.preventDefault();
	}
	break;
	
	//	For down arrow key
	case 40:
	if (marble.style.top != bottomBoundary + "px") {
		marble.style.top = parseInt(marble.style.top) + changePos + "px"
	}	else {
		event.preventDefault();
	}	
	break;
	
}

  },false);
