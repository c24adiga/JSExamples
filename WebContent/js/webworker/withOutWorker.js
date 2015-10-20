
function calculateNextFibonacciValue(n) {
	var s=0;
	if(n==0) {
		return s;
	}
	if (n===1) {
		return s = s+1;
	}
	return calculateNextFibonacciValue(n-1) +  calculateNextFibonacciValue(n-2);
}

function generateFibonacciSeries(n) {
	var results = [];
	for (var i=0; i<n; i++) {
		results.push(calculateNextFibonacciValue(i));
	}
	return results;
}

document.getElementById('getSeries').addEventListener('click', function(){
	var serviesLength = document.getElementById('seriesLength').value;
	if (serviesLength > 0) {
		console.log(generateFibonacciSeries(serviesLength));
	} else {
		alert('Invalid input');
	}
});
