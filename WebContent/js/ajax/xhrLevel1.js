(function call() {
		//js ajax call
	  xhttp = new XMLHttpRequest();
	  console.log(window);
	  xhttp.open("GET", "data.json", true);
	  xhttp.send();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	    	var result = xhttp.responseText;
			var data = JSON.parse(result);
			console.log(data);
	    	document.getElementsByClassName('js')[0].innerHTML = result;
	    }
	  };
	 
  
	//jquery ajax call
	  jQuery.ajax({
		  url: "http://api.joind.in/v2.1/talks/10889",
		  method:'GET',
		}).done(function(response, status) {
			console.log(status, response);
	    	document.getElementsByClassName('jquery')[0].innerHTML = response.talks[0].comments_uri;

		  jQuery( this ).addClass( "done" );
		});

})();