//vars
var scrollContainer = document.getElementById("home-scroll");
var homeIntro = document.getElementById("home-intro");
var homeDest = document.getElementById("home-dest");
var homeTours = document.getElementById("home-tours");
var homeBlog = document.getElementById("home-blog");

//scroll monitor watchers
var introWatcher = scrollMonitor.create(homeIntro),
    destWatcher = scrollMonitor.create(homeDest),
    toursWatcher = scrollMonitor.create(homeTours),
    blogWatcher = scrollMonitor.create(homeBlog);

var currSc = 0,
    prevSc = null,
    nextSc = 1,
    dir = 0,
    homeSections = document.getElementsByClassName("row-home");

console.log(homeSections);

//debounce function ( - David Walsh Blog)
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//Home Scroll Controller object
function HomeController(el) {
    this.el = el;
    this.el.addEventListener('wheel', this, false);
    // this.init;
}

// HomeController methods

//handle events, add switch-case for touch/swipe/click detect
//pass immediate as "true"/"false" to trigger event on the leading or trailing end
HomeController.prototype.handleEvent = debounce(function(e) {
    e.stopPropagation();
    if (e.type === "wheel") {
        //get direction of scroll
        if (e.deltaY > 0) {
            dir = 1;
            console.log('wheeldown')
            this.switchHomeNext(currSc);
        }
        else {
            console.log('wheelup');
            dir = -1;
            this.switchHomePrev(currSc);
        }
    }
    
}, 500, true);

HomeController.prototype.switchHomeNext = function(current) {
    if (currSc === homeSections.length - 1) {
        return;
    }
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    currSc++;
    // nextSc++;


    var pageTr = anime({
        targets: scrollContainer,
        top: -(h*currSc),
        easing: 'easeInOutQuad'
    })
    var animEl = homeSections[currSc].children[0];
    var anim = anime({
        targets: animEl,
        height: "400px",
        easing: 'easeInOutQuad',
        duration: 600,
        delay: 400
    });
    console.log(animEl[0]);
    //console.log('scroll down')
}

HomeController.prototype.switchHomePrev = function(current) {
    if (currSc === 0) {
        return;
    }
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    currSc--;
    var pageTr = anime({
        targets: scrollContainer,
        top: -(h*currSc),
        easing: 'easeInOutQuad'
    })
}



//let object go freeeeee :)
var homeObj = new HomeController(scrollContainer);