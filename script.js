'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function(message) {
	document.querySelector('.message').textContent = message;
};

// reset the game
document.querySelector('.again').addEventListener('click', function() {
	score = 20;
	document.querySelector('.score').textContent = score;

	secretNumber = Math.floor(Math.random() * 20) + 1;
	console.log((document.querySelector('.number').textContent = '?'));
	document.querySelector('.guess').value = '';
	// console.log((document.querySelector('.message').textContent = 'Start guessing....'));
	displayMessage('Start guessing....');
	document.querySelector('body').style.backgroundColor = '#333';
	document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);

	// console.log(typeof guess, guess);

	// No input
	if (!guess) {
		// console.log((document.querySelector('.message').textContent = `It's empty, please guess a number.`));
		displayMessage(`It's empty, please guess a number.`);

		// when player wins the game
	} else if (guess === secretNumber) {
		// console.log((document.querySelector('.message').textContent = `🎈 You won!`));
		displayMessage(`🎈 You won!`);
		console.log((document.querySelector('.number').textContent = secretNumber));

		if (score > highScore) {
			highScore = score;
		}
		document.querySelector('.highscore').textContent = highScore;

		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		// when player put too  high number
	} else if (guess !== secretNumber) {
		if (score > 1) {
			// console.log(
			// 	(document.querySelector('.message').textContent = guess > secretNumber ? 'too high' : `too low`)
			// );
			displayMessage(guess > secretNumber ? 'too high' : 'too low');
			score--;
			console.log((document.querySelector('.score').textContent = score));
		} else {
			console.log((document.querySelector('.message').textContent = `You have lost the game`));
			console.log((document.querySelector('.score').textContent = 0));
		}
	}
});
