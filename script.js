'use strict';

/* Btns */
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const newgameBtn = document.querySelector('.btn--new');

/* player 1 info */
const player1 = document.querySelector('.player--0');
const scorePlayer1 = document.querySelector('#score--0');
const currentPlaye1 = document.querySelector('#current--0');

/* player 2 info */
const player2 = document.querySelector('.player--1');
const scorePlayer2 = document.querySelector('#score--1');
const currentPlaye2 = document.querySelector('#current--1');

const imageArray = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];
let score1 = 0;
let score2 = 0;

const switchPlayers = function () {
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
};

const switchDice = function () {
  if (player1.classList.contains('player--active')) {
    let d = Math.floor(Math.random() * imageArray.length);
    document.querySelector('.dice').src = imageArray[d];
    score1 = score1 + d + 1;
    if (d !== 0) {
      if (score1 >= 100) {
        currentPlaye1.textContent = 'win';
      } else {
        currentPlaye1.textContent = score1;
        scorePlayer1.textContent = score1;
      }
    } else {
      currentPlaye1.textContent = 0;
      scorePlayer1.textContent = 0;
      score1 = 0;
      switchPlayers();
    }
  }
  if (player2.classList.contains('player--active')) {
    let c = Math.floor(Math.random() * imageArray.length);
    document.querySelector('.dice').src = imageArray[c];
    score2 = score2 + c + 1;
    if (c !== 0) {
      if (score2 >= 100) {
        currentPlaye2.textContent = 'win';
      } else {
        currentPlaye2.textContent = score2;
        scorePlayer2.textContent = score2;
      }
    } else {
      currentPlaye2.textContent = 0;
      scorePlayer2.textContent = 0;
      score2 = 0;
      switchPlayers();
    }
  }
};

const newGame = function () {
  score1 = 0;
  currentPlaye1.textContent = score1;
  scorePlayer1.textContent = score1;
  score2 = 0;
  currentPlaye2.textContent = score2;
  scorePlayer2.textContent = score2;

  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};

holdBtn.addEventListener('click', switchPlayers);
rollBtn.addEventListener('click', switchDice);
newgameBtn.addEventListener('click', newGame);
