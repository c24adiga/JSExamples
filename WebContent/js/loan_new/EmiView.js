/**
 */

window.onload=function(){
	var loanType = document.getElementsByName("loanType");
	console.log(loanType);
	reFrameTemplate();
	for(var i=0;i<loanType.length;i++) {
		loanType[i].addEventListener('change', function(e){
			reFrameTemplate();
		});
	}
	var loanData = function() {
		var loanObject;
		if(loanType[0].checked) {
			loanObject = Object.create(PersonalLoan);
			loanObject.reason = document.getElementById('reason').value;
			loanObject.dob = document.getElementById('dob').value;

		} else {
			loanObject = Object.create(HomeLoan);
			loanObject.propertyName = document.getElementById('propertyName').value;
			var propertyTypes =  document.getElementsByName('propertyType');
			for(var i=0;i<propertyTypes.length;i++) {
				if(propertyTypes[0].checked) {
					loanObject.propertyType = propertyTypes[i].value;
					break;
				}
			}
			loanObject.sqf=document.getElementById('sqft').value;;
		}
		loanObject.name = document.getElementById('name').value;
		loanObject.amount = document.getElementById('amount').value;
		loanObject.email = document.getElementById('email').value;
		loanObject.tenure=document.getElementById('tenure').value;
		return loanObject;
	};
	
	function reFrameTemplate(){
		var personalLoanContainer = document.getElementById('personal');
		var homeLoanContainer = document.getElementById('home');
		if(loanType[0].checked) {
			homeLoanContainer.style.display="none";
			personalLoanContainer.style.display="inline";
		} else {
			homeLoanContainer.style.display="inline";
			personalLoanContainer.style.display="none";
		}
	}

	document.getElementById('calculateEMI').addEventListener('click',function(){
		if (validateData()) {
			var emiObj = Calculator.calculateEMI(loanData());
			document.getElementById('result').innerHTML = '\n <b>Calculated date :</b>' +emiObj.calculatedDate + '\n <b>EMI : </b>' + emiObj.emi + '\n <b> Interest rate :</b>' + emiObj.interestRate;
	
		}
	});
	
	
	//emiObj = Calculator.calculateEMI(homeLoan);
	//window.alert('HOMELOAN \n Calculated date :' +emiObj.calculatedDate + '\n EMI : ' + emiObj.emi + '\n Interest rate :' + emiObj.interestRate);
	
	//emiObj = Calculator.calculateEMI(personalLoan);
	//window.alert('PERSONALLOAN \n Calculated date :' +emiObj.calculatedDate + '\n EMI : ' + emiObj.emi + '\n Interest rate :' + emiObj.interestRate);
	
};