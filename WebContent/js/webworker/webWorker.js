onmessage = function(e){
	if(e.data > 0) {
		generateFibonacciSeries(e.data);
	}
	
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
		postMessage(results);
	}
};


/**
 * Another way of calling onmessage
 */
/*function calculateNextFibonacciValue(n) {
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
	postMessage(results);
}

addEventListener('message', function(e){
	if(e.data > 0) {
		generateFibonacciSeries(e.data);
	}
}, true);
*/