var marble = document.getElementById('m2');
var startPos = 0;
var changePos = 10;



window.addEventListener("keydown", function(event) {
switch(event.keyCode) {
	//	For left arrow key
	case 37:
	startPos -= changePos;
	marble.style.transform = "translateX(" + startPos + "px)";
	break;
	
	//	For up arrow key
	case 38:
	startPos -= changePos;
	//	do something here
	marble.style.transform = "translateY(" + startPos + "px)";
	break;
	
	//	For right arrow key
	case 39:
	startPos += changePos;
	//	do something here
	marble.style.transform = "translateX(" + startPos + "px)";
	break;
	
	//	For down arrow key
	case 40:
	startPos += changePos;
	//	Do something here
	marble.style.transform = "translateY(" + startPos + "px)";
	break;
	
}

  });
