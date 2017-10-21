
// vars
var introSections = document.getElementsByClassName('intro');
totalSections = introSections.length;
var curr = 0;
var prev = null;
var active = 'active';
var direction = null;


// Constructor
function IntroContainer(el) {
	this.el = el;
	introSections[curr].classList.add('active-intro');
	this.initalEl = introSections[curr].children;
	for (var i = 0; i < this.initalEl.length; i++) {
		this.initalEl[i].classList.add('is-active');
	}
	this.el.addEventListener('wheel', this, false);
}

IntroContainer.prototype.handleEvent = function(e) {
	switch (e.type) {
		case "wheel":
			if(e.deltaY > 0) {
				direction = 1;
				
				this.switchNextSection(curr, direction);
			}
			else {
				direction = -1;
				this.switchPrevSection(curr, direction);

			}
	}
}

IntroContainer.prototype.switchNextSection = function(currentIndex, direction) {
	if(direction > 0) {
		if (currentIndex === totalSections - 1) {
			return;
		}
		else {
			prev = currentIndex;
			curr = currentIndex + 1;
			this.exitAnim(prev);
			this.entryAnim(curr);
		}
	}
}

IntroContainer.prototype.switchPrevSection = function(currentIndex, direction) {
	if (direction < 0) {
		if (currentIndex === 0) {
			return;
		}
		else {
			this.exitAnim(currentIndex);
			this.entryAnim(currentIndex - 1);
			curr = currentIndex - 1;
			if(curr != 0) {
				prev = curr - 1;
			}
		}	
	}
}


IntroContainer.prototype.exitAnim = function(index) {
	var animEl = introSections[index];
	var exitTl = anime.timeline();
}




var a = new IntroContainer(document.getElementById('ixd2'));