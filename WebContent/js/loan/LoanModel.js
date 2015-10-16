var Loan = function() {
	this.amount = 0;
	this.name = "";
	this.tenure = 0;
	this.email = "";
};
var PersonalLoan = function() {
	this.dob = null;
	this.reason = "";
};
var HomeLoan = function() {
	this.sqf = 0.0;
	this.propertyType = '';
	this.propertyName = '';
};
PersonalLoan.prototype = new Loan();
HomeLoan.prototype = new Loan();
