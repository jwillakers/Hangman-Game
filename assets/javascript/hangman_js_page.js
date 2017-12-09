alert("alkj;");



// create an array of 80's words to choose from [cool, hair, rad]. 
var words = ["cool", "hair", "rad"];
var guessremaining = 10;
var letterguessed = [];
var chosenWord = "";
var randomword = words[Math.floor(Math.random() * words.length)];
// user presses a key to begin game

// random word from array is chosen for user to guess
console.log(randomword)
for (i=0; i < randomword.length; i++) {
   		chosenWord = chosenWord + "_ ";
        }
$(".underscore").append(chosenWord);

$(document).keypress(function(event){
	var letterpress = event.key;
	console.log(letterguessed);
})
 // if (letterguessed === randomword.indexof(letterguessed){


// user chooses letter

// computer verifies if letter matches with random word generated from array

// if letter is correct, letter is displayed. 

// if letter is wrong, letter is added to letterguessed and reduce guessremaining by 1 until 
// guessremaining is 0

// alert "Game Over" if guessremaining gets to 0

// if user matches all letters in word before guessremaining gets to 0, alert "You Win"

// game is reset and new random word generated