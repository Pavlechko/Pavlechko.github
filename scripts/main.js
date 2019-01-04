var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/bio.jpg') {
		myImage.setAttribute ('src' , 'images/bio2.jpg');
	} else {
		myImage.setAttribute ('src' , 'images/bio.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt("Будь ласка, введіть ваше ім'я");
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Вітаннячко, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Вітаннячко, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}