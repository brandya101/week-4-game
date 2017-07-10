

// var random;

// 	function randomNum(){
// 	randomNumber = (Math.floor(Math.random()*100));
// 	random = randomNumber;
// 	}
	
//Create variables( win, loss, counter for user, total goal)
var counter = 0;
var loss;
var win;
var goal;
var random;


//Tested out to see that the counter works
//random number updates the global variable
//able to click all pictures and get the counter changed. 

$(document).ready(function(){

	random=Math.floor(Math.random() * 13);

	// create an image then get it a random function
	$("#summer, #morty, #rickSanchez").on("click",function(){
		alert("you clicked " + counter + " this many times");
		counter += random;		
	});
});