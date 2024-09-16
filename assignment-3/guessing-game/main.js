let secret = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess a number between 1 and 10 (inclusive)"));

while (guess !== secret) {
    guess = parseInt(prompt("Try again. Guess a number between 1 and 10 (inclusive)"));
}

alert(`You've successfully guessed the number, ${secret}`);
