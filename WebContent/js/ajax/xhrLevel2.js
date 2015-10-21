(function call() {
	//js ajax call level to file upload 
	xhr = new XMLHttpRequest();
	xhr.open("GET", "img.jpg", true);
	xhr.responseType = 'blob';
	xhr.send();
	var blob = null;
	console.log(window);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			blob=new Blob([new Uint8Array()], {type:'img/png'});
			console.log(xhr.response);
			blob = xhr.response;
			console.log(blob);
			var form = new FormData();
			form.append('binarydata', blob);
			var xhrform = new XMLHttpRequest();
			xhrform.open("POST", "servletA", true);
			xhrform.send(form);
			xhrform.onreadystatechange = function() {
				if (xhrform.readyState == 4 && xhrform.status == 200) {
					console.log(xhrform.response);
				}
			};
		}
	};
})();