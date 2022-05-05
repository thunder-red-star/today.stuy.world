// Load socket.io
var socket = io();
// Get the bell timing div
var bellTiming = document.getElementById("bell-timing");
// Every second, update the current time in the current-time-header id
setInterval(function() {
	var currentTime = new Date();
	var currentTimeHeader = document.getElementById("current-time-header");
	currentTimeHeader.innerHTML = currentTime.toLocaleTimeString();
}, 1000);
// On receive heartbeat, update the time since period start and time until next period
socket.on("heartbeat", function(data) {
	var timeSinceHeader = document.getElementById("time-since-header");
	var timeUntilHeader = document.getElementById("time-until-header");
	var currentPeriodName = document.getElementById("period-name-header");
	// Make sure new dates are in UTC
	var currentPeriodName = document.getElementById("period-name-header");
	timeSinceHeader.innerHTML = msToMinutes(data.currentClassTimeSince);
	timeUntilHeader.innerHTML = msToMinutes(data.currentClassTimeUntil);
});