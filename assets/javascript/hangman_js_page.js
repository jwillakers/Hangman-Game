// alert("alkj;");



// create an array of 80's words to choose from [cool, hair, rad]. 
var words = ["rose", "petunia", "hydrangea", "tulip"];
var guessremaining;
var wins = 0;
var losses = 0;
var letterguessed;
// string of underscores and spaces
var chosenWord; 
var randomword;
// user presses a key to begin game

// random word from array is chosen for user to guess and displays underscores
// console.log(randomword)
// for (i=0; i < randomword.length; i++) {
//    		chosenWord = chosenWord + "_ ";
//         }
// $(".underscore").append(chosenWord);
reset()
$(document).keypress(function(event){
	var letterpress = event.key;
	console.log(letterpress);

// if letter pressed is not a letter in the words array
 	if (randomword.indexOf(letterpress) === -1 && (guessremaining !=0)) {
 		letterguessed.push(letterpress);
 		console.log(letterguessed);
 	$("#letterguessed").html(letterguessed);
 		guessremaining -= 1
 	$("#guessesremaining").html(guessremaining);	

// check if letter pressed is a letter in the string
 	}else {

 		for (i=0; i< randomword.length; i++) {
 			if (letterpress === randomword.charAt(i)) {
 				console.log("you got it right " + letterpress + " " + i)
 			chosenWord = chosenWord.substring(0, [i * 2]) + letterpress + chosenWord.substring (i * 2 + 1);
 			$(".underscore").html(chosenWord);
 			}

 		}
 	}
 // here is where we check if the game is over
 			if (randomword === chosenWord.replace(/\s/g, "")) {
 				alert("you win...YAY! play again")
 			wins = wins + 1;
 // add wins to win counter
 				$("#totalwin").html(wins);

 		}
 // add losses to losses counter
 			else if (guessremaining === 0) {
 				losses = losses + 1
 				$("#totallosses").html(losses);
 				alert("you lose...play again!")
 			}
 		

 	

})

 // when button clicked, restarts game
 $("#play-again").click(function() {
 	reset();
// total wins and total losses do not dissappear
// new randomword
// letterguessed resets
// guessremaining resets
// underscore resets
// chosenWord resets
})
function reset() {
chosenWord = "";
guessremaining = 10;
letterguessed = [];
randomword = words[Math.floor(Math.random() * words.length)];
console.log(randomword)
for (i=0; i < randomword.length; i++) {
   		chosenWord = chosenWord + "_ ";
        }
$(".underscore").html(chosenWord);
$("#guessesremaining").html(guessremaining);
$("#letterguessed").html(letterguessed);

 }	

 	


// user chooses letter

// computer verifies if letter matches with random word generated from array

// if letter is correct, letter is displayed. 

// if letter is wrong, letter is added to letterguessed and reduce guessremaining by 1 until 
// guessremaining is 0

// alert "Game Over" if guessremaining gets to 0

// if user matches all letters in word before guessremaining gets to 0, alert "You Win"

// game is reset and new random word generated