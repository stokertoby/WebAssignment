var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/html5.png') {
		myImage.setAttribute ('src','images/htmlcss.png');
	} else {
		myImage.setAttribute ('src','images/html5.png');
	}
}

var myButton = document.getElementById("NameChange");
var User = document.getElementById("NameUser");

function setUserName() {
	var UserEntry = prompt('Please Enter Your Name.');
	localStorage.setItem('name', UserEntry);
	User.textContent = 'Welcome ' + UserEntry;

}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var StoredName = localStorage.getItem('name');
	User.textContent = 'Welcome ' + StoredName
}

myButton.onclick = function() {
	setUserName();
}