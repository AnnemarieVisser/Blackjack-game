function resetGame() {
    let firstCard;
    let secondCard;
    let sumOfFirstAndSecondCard;
    let hasBlackJack = false;
    let playerIsAlive = true;
    displayMessage.textContent = "Want to play a round?";
    displayCards.textContent = "Cards: ";
    displaySum.textContent = "Sum: ";
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function message(sumOfCards) {
    if (sumOfCards < 21) {
        return "Do you want to draw a new card?"
    } else if (sumOfCards === 21) {
        hasBlackJack = true;
        return "You've got Blackjack!"
    } else {
        playerIsAlive = false;
        return "You're out of the game!"
    }
}

function startTheGame() {
    let firstCard = getRandomNumber(2, 11);
    let secondCard = getRandomNumber(2, 11);
    let sumOfFirstAndSecondCard = firstCard + secondCard;
    console.log(sumOfFirstAndSecondCard);
    console.log(message(sumOfFirstAndSecondCard));
    displayMessage.textContent = message(sumOfFirstAndSecondCard);
    displaySum.textContent = `Sum: ${sumOfFirstAndSecondCard}`;
    displayCards.textContent = `Cards: ${firstCard}, ${secondCard}`;
}

const displayMessage = document.getElementById("message-el");
const displaySum = document.getElementById("message-sum");
const displayCards = document.getElementById("message-cards");

const startbutton = document.getElementById("startbutton");
startbutton.addEventListener("click", startTheGame);

const resetbutton = document.getElementById("resetbutton");
resetbutton.addEventListener("click", resetGame);