window.onload = function(){
	var canvas = document.getElementById('canvas1');
	context = canvas.getContext('2d');
	
    context.beginPath();
	context.moveTo(75, 50);
	context.lineTo(75,100);
	context.lineTo(25,100);
	context.fill();
	
	
	var chartData = [ {
		month : 70,
		perf : 125
	}, {
		month : 105,
		perf : 150
	}, {
		month : 120,
		perf : 170
	}, {
		month : 120,
		perf : 212
	}, {
		month : 210,
		perf : 222
	}, {
		month : 290,
		perf : 162
	} ];
	var canvas2 = document.getElementById('canvas2');
	context2 = canvas2.getContext('2d');
	var index = 0;
		
	var drawSegment= function(){
		var x1,y1,x2,y2;
		x1=chartData[index].month;
		y1=chartData[index].perf;
		x2=chartData[index+1].month;
		y2=chartData[index+1].perf;
		context2.beginPath();
		context2.moveTo(x1, y1);
		context2.lineTo(x2, y2);
		context2.stroke();
		index++;
	};
	
	var img = new Image();
	img.onload=function(){
		context2.drawImage(img,0,0);
		drawSegment();
	};
	img.src="chart.png";
	context2.strokeStyle="rgb(31,172,142)";
	context2.lineWidth=4;
	context2.lineCap="round";
	var frame = setInterval(function(){
		drawSegment();
		if(!(index < chartData.length-1)) {
			clearInterval(frame);
		}
	});
	
};