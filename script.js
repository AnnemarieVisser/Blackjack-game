let firstCard = getRandomNumber(2, 11);
let secondCard = getRandomNumber(2, 11);
let hasBlackJack = false;
let playerIsAlive = true;
let message = "";

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let sumOfFirstAndSecondCard = firstCard + secondCard;

if (sumOfFirstAndSecondCard < 21) {
    message = "Do you want to draw a new card?"
} else if (sumOfFirstAndSecondCard === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true;
} else {
    message = "You're out of the game!"
    playerIsAlive = false;
}

console.log(hasBlackJack);
console.log(playerIsAlive);
console.log(message);