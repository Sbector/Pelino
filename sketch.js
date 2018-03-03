var eventDate = new Date(/*"2018-03-03T14:15:00").getTime(*/);
var currentDate;
var offset;
var PEventdate, PCurrentDate;


function setup() {
	createCanvas(windowWidth, windowHeight);
	PEventdate = select('#eventDate');
	PCurrentDate = select('#currentDate');
	offset = eventDate.getTimezoneOffset();
	console.log(offset);
}

function draw() {
	currentDate = Date.now();
	PEventdate.html(offset);
	PCurrentDate.html(currentDate);
}