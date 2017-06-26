//Variables
var crystal = {

	blue:
	{
		name: "Blue",
		value: 0
	}
	green
	{
		name: "Green",
		value: 0
	}
	red
	{
		name: "Red",
		value: 0
	}
	yellow
	{
		name: "Yellow",
		value: 0
	}
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

//Functions
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var startgame = function() {
	
	//reset score
	var currentScore = 0;
	//set a new target score between 19 and 120
	targetScore = getRandom(19, 120);
	//set differenct values for each of the cyrstals
	crystal.blue.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);

	//change the html to reflect all changes
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	console.log("Target Score: " + targetScore);
	console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Yellow: " + crystal.yellow.value);

}

//Main Process

startGame();
$("#blue").click(function() {
	alert("test");
});

$("#green").click(function() {
	alert("test");
});

$("#red").click(function() {
	alert("test");
});

$("#yellow").click(function() {
	alert("test");
});