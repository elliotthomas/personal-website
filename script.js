
//Global Variables

var windowHeight;

//On page Load

init();

//Functions

function init () {
	windowHeight = window.innerHeight;
	addEventHandlers();

}

function addEventHandlers () {
	window.addEventListener('scroll', checkPosition)
    window.addEventListener('resize', init)
}

function checkPosition() {
	var elems = document.getElementsByClassName('social-link')
	var firstElem = document.getElementById('social-link-one')

		for (var i = 0; i < elems.length; i++) {
			var posFromTop = elems[i].getBoundingClientRect().top;
			console.log(posFromTop)
			console.log(windowHeight)
			if (posFromTop - windowHeight <= 0) {
			firstElem.classList.add('icon-link-one');
			elems[i].classList.add('icon-link');

		}
		}
	}



