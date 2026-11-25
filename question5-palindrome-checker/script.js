function checkPalindrome() {
  let word = document.getElementById("word").value.trim();
  let result = document.getElementById("result");

  if (word === "") {
    result.innerHTML = "<p class='error'>Please enter a word.</p>";
    return;
  }

  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  let message;

  if (word.toLowerCase() === reversed.toLowerCase()) {
    message = "This is a palindrome!";
  } else {
    message = "This is not a palindrome!";
  }

  result.innerHTML =
    "<p>Original Word: " + word + "</p>" +
    "<p>Reversed Word: " + reversed + "</p>" +
    "<p>Result: " + message + "</p>";
}