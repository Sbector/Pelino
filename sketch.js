var eventDate = new Date("2018-03-13T21:00:00");
var currentDate;
var PEventdate, PCurrentDate;


function setup() {
	createCanvas(windowWidth, windowHeight);
	PEventdate = select('#eventDate');
	PCurrentDate = select('#currentDate');
}

function draw() {
	currentDate = new Date();
	PEventdate.html(eventDate);
	PCurrentDate.html(currentDate);
}