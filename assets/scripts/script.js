const cards = document.querySelectorAll('.memory-card');
const movesCount = document.querySelector("#moves");
const scoreDisplay = document.querySelector("#score");
const winMessage = document.querySelector("#win-message");


// Game state variables
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;


// Event listener function for card click
function flipCard() {
    // Check if the board is locked or the same card is clicked
    if (lockBoard || this === firstCard) return;


    // Add 'flip' class to the clicked card
    this.classList.add('flip');


    if (!hasFlippedCard) {
        // First card click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // Second card click
        secondCard = this;


        // Check if the cards match
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // If the cards match-->disable cards, update score, and reset the board
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            resetBoard();
            movesCounter();
            score++;
            scoreDisplay.textContent = score;


            if (document.querySelectorAll('.flip').length === cards.length) {
                // Display congratulations message and game results
                if (winMessage) {
                    winMessage.classList.remove('hidden');
                    winMessage.innerHTML = `
                    <h1>Congratulations!</h1>
                    <h1>You have paired all cards.</h1>
                    <br>
                    <h3>Here's your result:</h3>
                    <br>
                    <h1>Moves: <span id="moves">${movesCount.innerHTML}</span></h1>
                    <h1>Score: <span id="score">${score}</span></h1>
                    `;
                }
           
                // Redirect to congratulation.html after 2 seconds
                setTimeout(() => {
                    const queryString = `moves=${movesCount.innerHTML}&score=${score}`;
                    window.location.href = `congratulation.html?${queryString}`;
                }, 2000);
            }
        } else {
            // If the cards don't match unflip cards, add animation, and reset the board
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500);


            // Add 'shake' animation when cards don't match
            setTimeout(() => {
                if (firstCard && secondCard) {
                    firstCard.classList.add("shake");
                    secondCard.classList.add("shake");
                }
            }, 1000);


            // Remove 'shake' and 'flip' classes after animation and reset the board
            setTimeout(() => {
                if (firstCard && secondCard) {
                    firstCard.classList.remove("shake", "flip");
                    secondCard.classList.remove("shake", "flip");
                    firstCard = secondCard = null;
                    resetBoard();
                }
            }, 1500);


            // Count the move
            movesCounter();
        }
    }
}


// Counting each move of the player
function movesCounter() {
    movesCount.innerHTML++;
}


// Reset the board 
function resetBoard() {
    firstCard = null;
    secondCard = null;
    hasFlippedCard = false;
    lockBoard = false;
}


// Immediately Invoked Function Expression (IIFE) for shuffling cards
(function shuffle() {
    cards.forEach(function (card) {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();


// Add event listeners to cards
cards.forEach(function (card) {
    card.addEventListener('click', flipCard);
});



