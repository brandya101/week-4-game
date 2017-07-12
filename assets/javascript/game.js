

// var random;

// 	function randomNum(){
// 	randomNumber = (Math.floor(Math.random()*100));
// 	random = randomNumber;
// 	}

// running for loop to go through index 

//Create variables( win, loss, counter for user, total goal)
var counter = 0;
var loss=0;
var win = 0;
var number_options=[];


//Tested out to see that the counter works
//random number updates the global variable
//able to click all pictures and get the counter changed. 

$(document).ready(function(){

	//random number that will go to each image
	// random=Math.floor(Math.random() * (13-1+1))+1;

	//Create a for loop to fill in an array of random numbers(4)
	
		for(var i=0; i < 4; i++){
			var ran = Math.floor(Math.random()* (13-1+1))+1;
			number_options[i]= ran;
			}
	
	//created random number for user to guess 
	var guessRandom= Math.floor(Math.random() * (100-40+1))+40;

	//Updates the title or user guess header
	$("#guess").text(guessRandom);

	//reset function 
	function reset(){
		
		var guessRandom=0
		var counter=0
		for(var i=0; i < 4; i++){
			var ran = Math.floor(Math.random()* (13-1+1))+1;
			number_options[i]= ran;
			}

	}

	function theMeeseeks(){
	 if(guessRandom-counter === 5)
		{
			//created new img tag
			var meseeks= $("<img>");

			meseeks.addClass("imr");

			meseeks.attr("src","assets/images/meseeks.jpeg");
	


		}
	}

	function madRick(){
		if(guessRandom-counter === 10){
			 var angryRick= $("<img>");

			 angryRick.addClass("ri");

			 angryRick.attr("src","assets/images/rickmad.jpg");

			 // $(".ri").append(angryRick);
			 angryRick.hide()
			 $(".ri").show();
		}
	}


	// create an image then get it a random function
	$("#rickSanchez").on("click",function(){

		//Everytime user clicks the pictures it starts a counter
		counter += number_options[0];	
		console.log(number_options[0]);

		// Logs on the bottom page what your current counter is
		$("#counter").html("Your current guess " + counter);


		theMeeseeks();
		madRick();
		//Created conditions for going over the Guess number
		if(guessRandom === counter){

			alert("You win");
			win++;
			$(".win").html("Win: " + win);
			reset();
		}
		else if(counter > guessRandom ){

			alert("you lose");
			loss++;
			$(".losses").html("Loss: " + loss);
			//Jquery with selecting winning div and losing div loss++;
			reset();
		}
	});

		// create an image then get it a random function
	$("#morty").on("click",function(){

		//Everytime user clicks the pictures it starts a counter
		counter += number_options[1];	
		console.log(number_options[1]);

		// Logs on the bottom page what your current counter is
		$("#counter").html("Your current guess " + counter);

		theMeeseeks();
		madRick();

		//Created conditions for going over the Guess number
		if(guessRandom === counter){

			alert("You win");
			win++;
			$(".win").html("Win: " + win);
			reset();
		}
		else if(counter > guessRandom ){

			alert("you lose");
			loss++;
			$(".losses").html("Loss: " + loss);
			//Jquery with selecting winning div and losing div loss++;
			reset();
		}
	});

		// create an image then get it a random function
	$("#jerry").on("click",function(){

		//Everytime user clicks the pictures it starts a counter
		counter += number_options[2];	
		console.log(number_options[2]);

		// Logs on the bottom page what your current counter is
		$("#counter").html("Your current guess " + counter);

		theMeeseeks();
		madRick();

		//Created conditions for going over the Guess number
		if(guessRandom === counter){

			alert("You win");
			win++;
			$(".win").html("Win: " + win);
			reset();
		}
		else if(counter > guessRandom ){

			alert("you lose");
			loss++;
			$(".losses").html("Loss: " + loss);
			//Jquery with selecting winning div and losing div loss++;
			reset();
		}
	});

	$("#summer").on("click",function(){

		//Everytime user clicks the pictures it starts a counter
		counter += number_options[3];	
		console.log(number_options[3]);

		// Logs on the bottom page what your current counter is
		$("#counter").html("Your current guess " + counter);

		theMeeseeks();
		madRick();

		//Created conditions for going over the Guess number
		if(guessRandom === counter){

			alert("You win");
			win++;
			$(".win").html("Win: " + win);
			reset();
		}
		else if(counter > guessRandom ){

			alert("you lose");
			loss++;
			$(".losses").html("Loss: " + loss);
			//Jquery with selecting winning div and losing div loss++;
			reset();
		}
	});
});


