// vars
var sections = document.getElementsByClassName('intro');
var currIndex = 0;
var active = 'is-active';
var dir = null;
var prev = null;


// obj constructor
function SectionObj(el) {
	this.el = el;
	// this.currIndex = currIndex;
	sections[currIndex].classList.add(active);
	this.el.addEventListener('wheel', this, false);
}


SectionObj.prototype.handleEvent = function(e) {
	switch(e.type) {
		case "wheel":
			// scroll dir check
			if (e.deltaY > 0) {
				dir = 1
				this.switchSections(dir);
			}
			else {
				dir = -1
				this.switchSections(dir);
			}
			console.log(e.deltaY);

	}	
}

SectionObj.prototype.switchSections = function(direction) {
	
	//down
	if (direction > 0) {
		if (currIndex == (sections.length - 1)) {
			return;
		}

		else {
			prev = currIndex
			currIndex++;
			sections[prev].classList.remove(active);
			sections[currIndex].classList.add(active);
		}
	}

	// up
	else {
		if (currIndex == 0) {
			return;
		}
		else {
			sections[currIndex].classList.remove(active);
			sections[prev].classList.add(active);
			currIndex-- ;
			if (currIndex !== 0) {
				prev = currIndex - 1;
			}
		}
	}
}

var a = new SectionObj(document.getElementById('ixd0'));
