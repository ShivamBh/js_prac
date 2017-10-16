
// vars
var introSections = document.getElementsByClassName('intro');
totalSections = introSections.length;
var curr = 0;
var prev = null;
var active = 'active';



// Constructor
function IntroContainer(el) {
	this.el = el;
	introSections[curr].classList.add('active-intro');
	this.initalEl = introSections[curr].children;
	for (var i = 0; i < this.initalEl.length; i++) {
		this.initalEl[i].classList.add('active');
	}
	this.el.addEventListener('wheel', this, false);
}

IntroContainer.prototype.handleEvent = function(e) {
	switch(e.type) {
		case "wheel":
			// scroll dir check
			if (e.deltaY > 0) {
				//down
				dir = 1
				this.switchSections(dir);
			}
			else {
				//up
				dir = -1
				this.switchSections(dir);
			}
			

	}
}

IntroContainer.prototype.switchSections = function(direction) {
	if (direction > 0) {
		if (curr === totalSections-1) {
			return;
		}

		else {
			console.log(direction);
			prev = curr;
			curr++;
			var prevChild = introSections[prev].children;
			var nextChild = introSections[curr].children;
			for(var i = 0; i < prevChild.length; i++) {
				prevChild[i].classList.remove('active');
			}
			introSections[prev].classList.remove('active-intro');
			introSections[curr].classList.add('active-intro');
			for(var i = 0; i < nextChild.length; i++) {
				nextChild[i].classList.add('active');
			}
		}
	}
	else {
		if (curr === 0) {
			return;
		}
		else {
			console.log(direction);
			var prevChild = introSections[prev].children;
			var currChild = introSections[curr].children;
			for(var i = 0; i < prevChild.length; i++) {
				currChild[i].classList.remove('active');
			}
			introSections[curr].classList.remove('active-intro');
			introSections[prev].classList.add('active-intro');
			for(var i = 0; i < currChild.length; i++) {
				prevChild[i].classList.add('active');
			}

			
			curr--;
			if (curr !== 0) {
				prev = curr - 1;
			}

		}

	}
}



var a = new IntroContainer(document.getElementById('ixd1'));