var myFirebase = new Firebase('https://chatlive-c8200.firebaseio.com/');
var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');

postButton.adEventListener('click', function(){
	var msgUser = usernameInput.value;
	var msgText = textInput.value;
	myFirebase.set(msgUser + " says: " + msgText);
	textInput.value = '';
});