var eventDate = new Date("2018-03-03T14:15:00").getTime();
var currentDate;
var PEventdate, PCurrentDate;


function setup() {
	createCanvas(windowWidth, windowHeight);
	PEventdate = select('#eventDate');
	PCurrentDate = select('#currentDate');
}

function draw() {
	currentDate = Date.now();
	PEventdate.html(eventDate);
	PCurrentDate.html(currentDate);
}