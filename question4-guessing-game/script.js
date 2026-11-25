let randomNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
let gameOver = false;

function checkGuess() {
  let guessInput = document.getElementById("guess").value;
  let message = document.getElementById("message");

  if (gameOver) {
    message.textContent = "You already won! Click Restart Game to play again.";
    return;
  }

  if (guessInput === "") {
    message.textContent = "Please enter a number.";
    return;
  }

  let guess = Number(guessInput);

  if (guess < 1 || guess > 20) {
    message.textContent = "Please enter a number between 1 and 20.";
    return;
  }

  attempts++;
  document.getElementById("attempts").textContent = "Attempts: " + attempts;

  if (guess > randomNumber) {
    message.textContent = "Too high! Try again.";
  } else if (guess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Correct! You won!";
    gameOver = true;
  }
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  gameOver = false;

  document.getElementById("guess").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
}

function showNumbers() {
  let i = 1;
  let output = "";

  while (i <= 10) {
    output += i + " ";
    i++;
  }

  document.getElementById("numbers").textContent = output;
}