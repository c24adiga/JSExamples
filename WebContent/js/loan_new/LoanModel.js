var Loan = {
	amount :0,
	name :"",
	tenure :0,
	email :""
};
var PersonalLoan = Object.create(Loan, {
	dob : { value : null},
	reason : {value:""}
});

var HomeLoan = Object.create(Loan, {
	sqf :{ value : 0.0},
	propertyType :{ value : ''},
	propertyName :{ value : ''},
});
