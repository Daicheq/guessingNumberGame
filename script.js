'use strict';

const againBtn = document.querySelector('.again');
const guessingNumber = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');

let randomNumber;
let highscore = 0;
let score = 20;

const handleGuess = () => {
  if (isNaN(guessInput.value)) {
    message.textContent = 'Please enter the number!';
  } else if (parseInt(guessInput.value) === randomNumber) {
    document.body.style.background = '#46d317';
    message.textContent = 'Correct!';
    guessingNumber.textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessInput.value !== randomNumber && guessInput.value !== '') {
    if (score > 1) {
      if (parseInt(guessInput.value) < randomNumber) {
        message.textContent = 'Higher! 📈';

        score--;
        document.querySelector('.score').textContent = score;
      } else if (parseInt(guessInput.value) > randomNumber) {
        message.textContent = 'Lower! 📉';
        score--;
        document.querySelector('.score').textContent = score;
      }
      guessInput.value = '';
    } else {
      document.body.style.background = '#ca2f2f';
      message.textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = '0';
      guessingNumber.textContent = randomNumber;
    }
  }
};

const resetGameFoo = () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.body.style.background = '#222';
  message.textContent = 'Start guessing...';
  guessingNumber.textContent = '?';
  guessInput.value = '';
};

resetGameFoo();

checkBtn.addEventListener('click', handleGuess);
againBtn.addEventListener('click', resetGameFoo);
