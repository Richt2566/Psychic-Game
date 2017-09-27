
var wins = 0;
var losses = 0;
var numbLeft = 10;

var empty = " ";

var startGame = document.getElementById("startGame");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alreadyGuesses = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

startGame.addEventListener("click", function () {
	/*console.log(computerGuess);*/
	document.getElementById("numbLeft").textContent = " Number of guesses left: " + numbLeft

});

function onCall() {
	console.log(computerChoices[Math.floor(Math.random() * computerChoices.length)]);

}

document.onkeyup = function(event) {
	var userG = event.key;
	var computerG = computerGuess;
	console.log(computerG);
	if (userG !== computerG) {
		numbLeft--
		console.log("nope");
		alreadyGuesses.push(userG);
		document.getElementById("guessLeft").textContent = "Your guesses so far: " + alreadyGuesses
		document.getElementById("numbLeft").textContent = " Number of guesses left: " + numbLeft
	} else if (userG == computerG) {
		console.log("nice");
      	wins++
      	numbLeft = 10;
      	document.getElementById("win").textContent = "Wins: " + wins
		document.getElementById("numbLeft").textContent = "Number of guesses left: " + numbLeft
		document.getElementById("guessLeft").textContent = "Your guesses so far: " + empty
		alreadyGuesses.length = 0;
		var newSecret = computerChoices[Math.floor(Math.random() * computerChoices.length)]
		console.log(newSecret);
		computerGuess = newSecret
	}

	if (numbLeft < 1) {
		losses++
		console.log("game over");
		document.getElementById("lose").textContent = "Losses: " + losses
		numbLeft = 10;
		alreadyGuesses.length = 0;
		document.getElementById("guessLeft").textContent = "Your guesses so far: " + empty
		document.getElementById("numbLeft").textContent = "Number of guesses left: " + numbLeft
		var newSecret = computerChoices[Math.floor(Math.random() * computerChoices.length)]
		console.log(newSecret);
		computerGuess = newSecret
	
	}
}


