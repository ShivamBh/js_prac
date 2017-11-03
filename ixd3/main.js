var pageSections = document.querySelectorAll('.content_outer');
var curr = 0,
	prev = null;

// console.log(prev);

// Constructor
function PageInteraction(el) {
	this.el = el;
	//set current
	
	this.el.addEventListener('wheel', this, false);
	this.init;
}

PageInteraction.prototype.init = function() {
	pageEl = pageSections[0];
	pageEl.style.opacity = 1;
	pageEl.style.zIndex = 1000;
}

var x = PageInteraction(document.getElementById('ixd3'));