// based on turoial from https://www.w3schools.com/graphics/canvas_clock.asp 

function clockSetUp(){
//	alert("clockSetUp called");
	var canvas = document.getElementById("canvasClock");
	var context = canvas.getContext("2d");
	var radius = canvas.height / 2;
	context.translate(radius, radius);
	radius = radius * 0.75;
//	drawFace(context, radius);
//	alert("setting interval");
	
	//setInterval(drawClock(context, radius), 1000);
	
}


function drawClock(context, radius){
	//alert("drawClock called");
	drawFace(context, radius);
	drawTime(context, radius);
}

function drawFace(context, radius){
	
	var grad;
	context.beginPath();
	context.arc(0, 0, radius, 0, 2*Math.PI);
	context.fillStyle = "#6699CC";
	context.fill();
	
	grad = context.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05);
	grad.addColorStop(0, '#ffffff');
	grad.addColorStop(1, '#ffffff');
	context.strokeStyle = grad;
	context.lineWidth = radius * 0.2;
	context.stroke();
	
	context.beginPath();
	context.arc(0, 0, radius*0.1, 0, 2*Math.PI);
	context.fillStyle = '#ffffff';
	context.fill();
}

function drawTime(context, radius){
	//alert("drawTime called");
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	
	//hour
	hour = hour%12;
	hour = (hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
	drawHand(context, hour, radius*0.5, radius*0.15);
	
	//minute
	minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
	drawHand(context, minute, radius*0.7, radius*0.15);
	
	//second
	second = (second*Math.PI/30);
	drawHand(context, second, radius*0.9, radius*0.05)
}

function drawHand(context, pos, length, width){
	context.beginPath();
	context.lineWidth = width;
	context.lineCap = "round";
	context.moveTo(0,0);
	context.rotate(pos);
	context.lineTo(0, -length);
	context.stroke();
	context.rotate(-pos);
}