describe("Calculator", function(){
var calc;
beforeEach(function(){
	calc = new Calculator();
	this.addMatchers({
		 toBeBetween:function(a,b){
			 return (this.actual >= a && this.actual <= b);
		 }
	});
});
it('Should be able to perform add', function(){
	expect(calc.add(1,1)).toBe(2);
});

it('Should be able to file', function(){
	expect(calc.add(1,1)).not.toEqual(8);
});

it('Should be able to perform divide', function(){
	expect(calc.divide(6,2)).toBe(3);
});

it('Should be able to perform divide', function(){
	expect(calc.divide(1,3)).toBeBetween(0.3, 0.4);
});
});

