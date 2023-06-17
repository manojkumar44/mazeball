var marble = document.getElementById('m2');
var topBoundary = 0;
var leftBoundary = 0;
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
	marble.style.left = parseInt(marble.style.left) - changePos + "px";
	break;
	
	//	For up arrow key
	case 38:
	marble.style.top = parseInt(marble.style.top) - changePos + "px";
	break;
	
	//	For right arrow key
	case 39:
	marble.style.left = parseInt(marble.style.left) + changePos + "px";
	break;
	
	//	For down arrow key
	case 40:
		marble.style.top = parseInt(marble.style.top) + changePos + "px"
	break;
	
}

  },false);
