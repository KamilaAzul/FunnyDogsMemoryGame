const cards = document.querySelectorAll('.memory-card');
const movesCount = document.querySelector("#moves");
const scoreDisplay = document.querySelector("#score");
const winMessage = document.querySelector("#win-message");
const timerDisplay = document.querySelector("#timer");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let moves = 0;
let timer;
let elapsedSeconds = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first card click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // second card click
    secondCard = this;
  }

  // checking if the cards match
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    // the cards match-->disable cards
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    movesCounter();

    // Increasing the score for each correct match
    score++;
    document.querySelector("#score").textContent = score;

  } else {
    // the cards don't-->unflip cards
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 1500);

    // adding 'shake' animation when cards don't match
    setTimeout(() => {
      firstCard.classList.add("shake");
      secondCard.classList.add("shake");
    }, 1000);

    setTimeout(() => {
      firstCard.classList.remove("shake", "flip");
      secondCard.classList.remove("shake", "flip");
      firstCard = secondCard = "";
      resetBoard();
    }, 1500);

    movesCounter();
  }
}

// Counting each move of the player
function movesCounter() {
  movesCount.innerHTML++;
  moves++;

  // Start the timer on the first move
  if (moves === 1) {
    startTimer();
  }
}

// Starting the timer
function startTimer() {
  timer = setInterval(() => {
    elapsedSeconds++;
    updateTimerDisplay();
  }, 1000);
}

// Update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Reseting board
function resetBoard() {
  firstCard = null;
  secondCard = null;
  hasFlippedCard = false;
  lockBoard = false;
}

// IIFE- Immediately Invoked Function expression method
(function shuffle() {
  cards.forEach(function (card) {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

cards.forEach(function (card) {
  card.addEventListener('click', flipCard);
});

// Reseting board
function resetBoard() {
    firstCard = null;
    secondCard = null;
    hasFlippedCard = false;
    lockBoard = false;
  
    // Check if all cards are paired
    if (document.querySelectorAll('.flip').length === cards.length) {
      stopTimer();
    }
  }
  
  // Stop the timer
  function stopTimer() {
    clearInterval(timer);
  }