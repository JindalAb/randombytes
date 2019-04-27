var moveAbleObj = null;

window.onload = init;

document.onkeydown = function(e) {
	var key = e.keyCode;
	switch(key) {
		case 38 : 	moveUp();
					break;
		case 40 : 	moveDown();
					break;
	}
};

function init() {
	moveAbleObj = document.getElementById("main");
	moveAbleObj.style.position = 'relative';
	moveAbleObj.style.top = '0px';
}

function moveUp(){
	moveAbleObj.style.top = parseInt(moveAbleObj.style.top) - 5 + 'px';
}

function moveDown(){
	moveAbleObj.style.top = parseInt(moveAbleObj.style.top) + 5 + 'px';
}

