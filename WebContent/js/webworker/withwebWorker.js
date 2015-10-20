var messageHandler = function(e){
	console.log('First '+ e.data.length +' Fibonacci nummbers');
	console.log(e.data);
};
var errorHandler = function(e){
	console.log('Error received from worker '+e);
};
document.getElementById('getSeries').addEventListener('click', function(){
	var serviesLength = document.getElementById('seriesLength').value;
	if (serviesLength <1) {
		alert('Enter valid number');
	}
	worker=new Worker("js/webworker/webWorker.js");
	worker.onmessage=messageHandler;
	worker.onerror=errorHandler;
	worker.postMessage(serviesLength); // call worker onmessage event
});
	
