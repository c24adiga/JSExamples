var Calculator = {
	calculateEMI : function(loanType) {
		var date = new Date();
		var amount = loanType.amount;
		var tenure = loanType.tenure;
		// CLosures
		return {
			calculatedDate : date,
			emi : amount / tenure,
			interestRate : amount / 100
		};
	}
};