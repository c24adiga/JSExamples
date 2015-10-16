/**
 */
var showPoll = function(){
	poll=PollService.getPollData();
	showPoll1(poll);
};

var showPoll1 = function(poll) {
	// 1. create the div i.e Container to show the poll information
	createPollPanel();
	
	var questionParagraph = createQuestionParagraph();
	
	showQuestion(questionParagraph, poll.question);
	
	//createOption panel
	var optionsPanel = new Array();
	for(var i=0;i<poll.options.length;i++) {
		optionsPanel.push(createOptionsPanel(i));
	}
	showOptions(optionsPanel, poll.options);

	createPollVotePanel();
	createResultPanel();
};

var createResultPanel = function(){
	var divresultPanel = document.createElement('div');
	attchAttribute(divresultPanel,'id', '#divresult');
	document.getElementById('#divPollPanel').appendChild(divresultPanel);
};

var showResult = function(){
	document.getElementById('#divresult').innerHTML ='<b>RESULT:</b> Amitab: ' + poll.options[0].noOfVotes + ' Amir:  ' + poll.options[1].noOfVotes + ' Akshay:  ' +poll.options[2].noOfVotes;
};

var createPollPanel=function(){
	var divPollPanel = document.createElement('div');
	attchAttribute(divPollPanel,'id', '#divPollPanel');
	attchAttribute(divPollPanel,'class', 'contanier col-md-2 col-md-offset-5');

	document.body.appendChild(divPollPanel);
	return divPollPanel;
};

var createQuestionParagraph=function(){
	var questionParagraph = document.createElement('p');
	attchAttribute(questionParagraph, 'id', '#questionParagraph');
	document.getElementById('#divPollPanel').appendChild(questionParagraph);
	return questionParagraph;
};

var showQuestion=function(questionParagraph, question){
	questionParagraph.innerHTML = question;
};

var createOptionsPanel=function(count){
	var divoptionPanel = document.createElement('div');
	attchAttribute(divoptionPanel,'id', 'divoptionPanel'+count);
	
	var divRadioPanel = document.createElement('div');
	attchAttribute(divRadioPanel,'id', 'radioPanel'+count);
	attchAttribute(divRadioPanel,'class', 'radio');

	var radioOption  = document.createElement('input');
	attchAttribute(radioOption,'type', 'radio');
	attchAttribute(radioOption,'id', 'option'+count);
	attchAttribute(radioOption,'name', 'pollOptions');
	var radioText = document.createElement('span');
	attchAttribute(radioText,'id', 'optionText'+count);
	divRadioPanel.appendChild(radioOption);
	divRadioPanel.appendChild(radioText);

	divoptionPanel.appendChild(divRadioPanel);
	document.getElementById('#divPollPanel').appendChild(divoptionPanel);
	return divoptionPanel;
};

var showOptions = function(optionsPanel, options) {
	for(var i=0;i<options.length;i++) {
		console.log(optionsPanel[i]);
		document.getElementById('optionText'+i).innerHTML = options[i].optionText;
		attchAttribute(document.getElementById('option'+i), 'value', options[i].optionText);
	}
};


var createPollVotePanel = function() {
	var buttonOption  = document.createElement('input');
	attchAttribute(buttonOption,'type', 'button');
	attchAttribute(buttonOption,'id', '#vote');
	attchAttribute(buttonOption,'value', 'Vote');
	document.getElementById('#divPollPanel').appendChild(buttonOption);
};


var attchAttribute = function(element, type, value) {
	element.setAttribute(type, value);
};

window.onload=function(){
	showPoll();
	document.getElementById('#vote').addEventListener('click', function() {
		var pollOptions = document.getElementsByName('pollOptions');
		for(var i=0; i<pollOptions.length;i++) {
			if (pollOptions[i].checked) {
				poll.options[i].noOfVotes += 1;
			}
		}
		showResult();
		renderChart();
	});
	showResult();
	showChart();

};

var showChart = (function(){
	var divChart  = document.createElement('div');
	attchAttribute(divChart,'id', 'chartContainer');
	document.body.appendChild(divChart);
	renderChart();
});

var renderChart= function(){
	var dataPoints = [];
	var totalVotes = poll.options[0].noOfVotes + poll.options[1].noOfVotes + poll.options[2].noOfVotes;
	for(var i=0; i<poll.options.length;i++) {
		dataPoints.push({y:poll.options[i].noOfVotes, legendText:poll.options[i].optionText + '(' + poll.options[i].noOfVotes + ' votes)', indexLabel: '(' + ((poll.options[i].noOfVotes/totalVotes)*100 + '').substring(0, 2) + ' %)'});
	}
	
	var chart = new CanvasJS.Chart("chartContainer",
			{
				title:{
					text: "Vote result",
					fontFamily: "Impact",
					fontWeight: "normal"
				},

				legend:{
					text:'total',
					verticalAlign: "bottom",
					horizontalAlign: "center"
				},
				data: [
				{
					startAngle: 45,
					indexLabelFontSize: 20,
					indexLabelFontFamily: "Garamond",
					indexLabelFontColor: "darkgrey",
					indexLabelLineColor: "darkgrey",
					indexLabelPlacement: "outside",
					type: "doughnut",
					showInLegend: true,
					dataPoints: dataPoints
				}
				]
			});
			chart.render();
			
			var childNode = document.getElementsByClassName('canvasjs-chart-credit');
			childNode[0].text ='';
			return chart;
};