

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

	//random number that will go to each image
	random=Math.floor(Math.random() * (13-1+1))+1;

	//created random number for user to guess 
	var guessRandom= Math.floor(Math.random() * (100-40+1))+40;

	//Updates the title or user guess header
	$("#guess").text(guessRandom);

	// create an image then get it a random function
	$("#summer, #morty, #rickSanchez").on("click",function(){

		//Everytime user clicks the pictures it starts a counter
		counter += random;	

		console.log("you clicked " + counter + " this many times");

		//Created conditions for going over the Guess number
		if(guessRandom === counter){

			alert("You win");
		}
		else if(counter > guessRandom ){

			alert("you lose");
		}
	});
});


// var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum