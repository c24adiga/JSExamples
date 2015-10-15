var PollService = {
	getPollData : function() {
		var poll = Object.create(Poll);
		poll.pollId=1;
		poll.date = new Date();
		poll.category = "Bollywood";
		poll.question = "Who is the favourite star?";
		
		var option1 = Object.create(Options);
		option1.optionText="Amitabh bhachan";
		option1.noOfVotes= 60;

		var option2 = Object.create(Options);
		option2.optionText="Amir";
		option2.noOfVotes= 30;
		
		var option3 = Object.create(Options);
		option3.optionText="Akshay";
		option3.noOfVotes= 50;
		poll.options =[option1, option2, option3];
		// CLosures
		return poll;
	}
};