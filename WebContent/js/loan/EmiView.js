/**
 */

window.onload=function(){
	var loanType = document.getElementsByName("loanType");
	console.log(loanType);
	for(var i=0;i<loanType.length;i++) {
	loanType[i].addEventListener('change', function(e){
		var personalLoanContainer = document.getElementById('personal');
		var homeLoanContainer = document.getElementById('home');
		if(loanType[0].checked) {
			homeLoanContainer.style.display="none";
			personalLoanContainer.style.display="inline";
		} else {
			homeLoanContainer.style.display="inline";
			personalLoanContainer.style.display="none";
		}
	});
	}
	var personalLoan = new PersonalLoan();
	personalLoan.name = "Ram";
	personalLoan.amount = 500000.00;
	personalLoan.email = 'c@c.com';
	personalLoan.reason = 'for nobal cause';
	personalLoan.dob= new Date();
	personalLoan.tenure=5;
	
	var homeLoan = new HomeLoan();
	homeLoan.name = 'Sham';
	homeLoan.amount = 100000.00;
	homeLoan.email='s@c.om';
	homeLoan.propertyName = 'my name';
	homeLoan.propertyType = 'individual';
	homeLoan.sqf=3000;
	homeLoan.tenure=5;
	
	
	emiObj = Calculator.calculateEMI(homeLoan);
	window.alert('HOMELOAN \n Calculated date :' +emiObj.calculatedDate + '\n EMI : ' + emiObj.emi + '\n Interest rate :' + emiObj.interestRate);
	
	emiObj = Calculator.calculateEMI(personalLoan);
	window.alert('PERSONALLOAN \n Calculated date :' +emiObj.calculatedDate + '\n EMI : ' + emiObj.emi + '\n Interest rate :' + emiObj.interestRate);
	
};