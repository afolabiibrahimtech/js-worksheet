function analyzeString() {
  let sentence = document.getElementById("sentence").value;
  let result = document.getElementById("result");

  if (sentence.trim() === "") {
    result.innerHTML = "<p class='error'>Please enter a sentence.</p>";
    return;
  }

  let characters = sentence.length;

  // Split on any spaces so extra spaces don't count as words
  let words = sentence.trim().split(/\s+/);
  let wordCount = words.length;

  let upper = sentence.toUpperCase();
  let lower = sentence.toLowerCase();

  let vowelCount = 0;
  let vowels = "aeiou";

  for (let i = 0; i < lower.length; i++) {
    if (vowels.includes(lower[i])) {
      vowelCount++;
    }
  }

  result.innerHTML =
    "<p>Characters: " + characters + "</p>" +
    "<p>Words: " + wordCount + "</p>" +
    "<p>Uppercase: " + upper + "</p>" +
    "<p>Lowercase: " + lower + "</p>" +
    "<p>Vowels: " + vowelCount + "</p>";
}