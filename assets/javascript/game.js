
// create an array of words
var flowerArray = [
	"Rose",
	"Tulip",
	"Hydrangea",
	"Daisy",
	"Petunia",
	];

// generates random number

var randNum = Math.floor(Math.random() * flowerArray.length);
 // generates random word
var rightWord = [];
var wrongWord = []
var chosenWord = flowerArray[randNum];
var underScore = [];
// create underscores based on length of word
var underScore = [];
var DomunderScore = []

var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightguess");
var docWrongGuess = document.getElementsByClassName("wrongguess");

// testing
console.log(chosenWord);
var generateUnderscore = () => {
	for(let i = 0; i = chosenWord.length; i++) {
		underScore.push("_");
		// docUnderScore[0].innerHTML = underScore.join(" ");
	}
	return underScore;
}
// testing
console.log(generateUnderscore());
// get users guess
document.addEventListener("keypress", (event) =>{
var keycode = String.fronChad

// if users guess is right
	if(chosenWord.indexOf(keyword) > -1) {
	// add to right words array
	rightWord.push(keyword);

// replace underscore with rigt letter
	underScore[chosenWord.indexOf(keyword)] = keyword;
	docUnderScore[0].innerHTML = underScore.join(" ");
	docRightGuess[0].innerHTML = rightWord;
// checks to see if user word matches guesses
	if(underScore.join("") == chosenWord) {
	alert("You Win");
// if wrong, push to wrong array
	} 
}
else {
	wrongWord.push(keyword);
	docWrongGuess[0].innerHTML = wrongWord;
}
});

docUnderScore[0].innerHTML = generateUnderscore().join(" ");
