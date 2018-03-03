var eventDate = new Date("2018-03-03T14:15:00").toUTCString();
var currentDate;
var offset;
var storeDate;
var syncDate;
var PEventdate, PCurrentDate, PSyncDate;


function setup() {
	createCanvas(windowWidth, windowHeight);
	PEventdate = select('#eventDate');
	PCurrentDate = select('#currentDate');
	PSyncDate = select('#syncDate');
}

function draw() {

	currentDate = new Date().toUTCString();

	offset = ServerDate - new Date();
	storeDate = new Date(currentDate).getTime();
	syncDate = new Date(storeDate-(offset)).toUTCString();
	
	PEventdate.html(eventDate);
	PCurrentDate.html(currentDate);
	PSyncDate.html(syncDate);
}