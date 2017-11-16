var homeSections = document.getElementsByClassName('home-sections');
var direction = 0;

function HomeControl(el) {
    this.el = el;
    this.el.addEventListener('wheel', this, false);
    // this.init;
}

HomeControl.prototype.handleEvent = function(e) {
	switch (e.type) {
		case "wheel":
			if(e.deltaY > 0) {
				direction = 1;
				
				console.log('down');
			}
			else {
				direction = -1;
				console.log('up');

			}
	}
}

HomeControl.prototype.getNextSection = function() {

}

//switch section , det direction value to +1 or -1
//if +1 fetch next section, change current, previous values
// and set it to top:100% and have it translate
//or exitAnim with current and start entryAnim for next/prev
//if -1 fetch previous section, change current.
var home = new HomeControl(document.getElementById('homeControl'));

