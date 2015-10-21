var ws;
function openWSConnection() {
	ws = new WebSocket("ws://192.168.148.102:8080/ness1/wsserver");
	ws.onmessage = function(event) {
		var msg = document.querySelector('#messages');
		var jsonMsg = JSON.parse(event.data);
		var serverData = " "+jsonMsg.user + " : " + jsonMsg.message + " ";
		msg.value = msg.value + serverData;
	};
}
function closeConnection() {
	try {
		ws.close();
	} catch (e) {
		console.log(e);
	}
	;
}

function sendMessage() {
	var user = document.querySelector('#user').value;
	if (user === "") {
		alert("user name is empty");
		return;
	}
	var msgInput = document.querySelector('#msgInput').value;
	if (msgInput !== "") {
		var jsonObj = {
			'user' : user,
			'message' : msgInput
		};
		ws.send(JSON.stringify(jsonObj));
		msgInput.value = '';
	}
	;
	document.querySelector('#msgInput').focus();
};