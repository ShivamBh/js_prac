// vars
var resetButton = document.getElementById('reset-button');
var gameSquares = [];

// colors arr "square-#" class list
var colors = [];
for (var i = 0; i < 10; i++) {
	colors.push('square-' + i);
}



function setupGame() {
	var array = document.getElementsByClassName("game-square");
	for(var i = 0; i < array.length; i++) {
		gameSquares.push(new GameSquare(array[i], colors[0]));
	}
}

function GameSquare(el, color) {
	this.el = el;
	this.isOpen = false;
	this.isLocked = false;
	this.el.addEventListener("click", this, false)
	this.setColor(color);
}

GameSquare.prototype.handleEvent = function(e) {
	switch (e.type) {
		case "click" :
			if ( this.isOpen == true || this.isLocked == true) {
				return; 
			
		}
		this.isOpen = true
		this.el.classList.add('flip');

	}
}

GameSquare.prototype.reset = function() {
	this.isOpen = false;
	this.isLocked = false;
	this.el.classList.remove('flip');
}

GameSquare.prototype.lock = function() {
	this.isLocked = true;
	this.isOpen = true;
}

GameSquare.prototype.setColor = function(color) {
	this.el.children[0].children[1].classList.remove(this.color);
	this.color = color;
	this.el.children[0].children[1].classList.add(color);
}

// randomise and get colors
function random(n) {
	return Math.floor(Math.random() * n);
}

function getSomeColors() {
	var colorscopy = col.slice();
	var randomColors = [];
	for (var i = 0; i < 8; i++) {
		var index = random(colorscopy.splice(index, 1)[0]);
	}
	return randomColors.concat(randomColors.slice());
}


// setup game call
setupGame();

