var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var computerGuess;
var userGuess

updateGuessesLeft();


document.onkeyup = function(event) {


		userGuess = event.key;
		userGuess = userGuess.toLowerCase();
		computerGuess = getComputerGuess();
// win
		if (userGuess == computerGuess) {
			wins++;
			guessesLeft = 9;
			guesses = [];
		}
// keep playing
		else {
			guesses.push(userGuess);
			guessesLeft--;
		}
// lose
		if (guessesLeft == 0) {
			losses++;
			guessesLeft = 9;
			guesses = [];
		}

		updateUserGuess();
		updateWins();
		updateLosses();
		updateGuessesLeft();
}

function updateUserGuess() {
	document.getElementById("guesses").textContent = guesses;

}

function updateWins() {
	document.getElementById("wins").textContent = wins;

}

function updateLosses() {
	document.getElementById("losses").textContent = losses;

}

function updateGuessesLeft() {
	document.getElementById("guessesLeft").textContent = guessesLeft;

}

function getComputerGuess() {
	return letters[Math.floor((Math.random() * letters.length) + 1)];

}




