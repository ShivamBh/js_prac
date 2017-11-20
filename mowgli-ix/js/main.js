var scrollContainer = document.getElementById("home-scroll");
var currSc = 0,
    prevSc = null,
    nextSc = 1,
    dir = 0,
    homeSections = document.getElementsByClassName("row-home");

console.log(homeSections);

//Home Scroll Controller object
function HomeController(el) {
    this.el = el;
    this.el.addEventListener('wheel', this, false);
    // this.init;
}

// HomeController methods
HomeController.prototype.handleEvent = function(e) {
    e.stopPropagation();
    if (e.type === "wheel") {
        //get direction of scroll
        if (e.deltaY > 0) {
            dir = 1;

            this.switchHomeNext(currSc);
        }
        else {
            dir = -1;
            this.switchHomePrev(currSc);
        }
    }
    
}

HomeController.prototype.switchHomeNext = function(current) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    currSc++;
    // nextSc++;


    var pageTr = anime({
        targets: scrollContainer,
        top: -(h*currSc),
        easing: 'easeInOutQuad'
    })
    //console.log('scroll down')
}

HomeController.prototype.switchHomePrev = function(current) {
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