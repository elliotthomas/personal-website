console.log('In script.js')

window.onresize = function() {
	var block = document.getElementsByClassName('block');
	var blockSkills = document.getElementsByClassName('block-skills-tile');
	var blockSkillsText = document.getElementsByClassName('block-skills-text');
	var logos = document.getElementsByClassName('logo');
	addBlockStyle(block);
	addBlockStyle(blockSkills);
	addMarginStyle(blockSkills);
	addBlockStyle(blockSkillsText);
	addMarginStyle(blockSkillsText);
	addBlockStyle(logos);
	addMarginStyle(logos);
	console.log('in block skills', blockSkills);
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	windowWidth < 500 ? console.log('Under 500'): console.log('Still over 500');
};

function addBlockStyle (array) {
	for (var i = 0; i < array.length; i++) {
		array[i].style.display = "block"
	}
}

function addMarginStyle (array) {
	for (var i = 0; i < array.length; i++) {
		array[i].style.margin = "0 auto"
	}
}

