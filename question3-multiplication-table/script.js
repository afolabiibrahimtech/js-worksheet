function generateTable() {
  let numberInput = document.getElementById("number").value;
  let result = document.getElementById("result");

  if (numberInput === "") {
    result.innerHTML = "<p class='error'>Please enter a number.</p>";
    return;
  }

  let number = Number(numberInput);
  let table = "<table>";

  for (let i = 1; i <= 10; i++) {
    table += "<tr><td>" + number + " x " + i + " = " + (number * i) + "</td></tr>";
  }

  table += "</table>";

  result.innerHTML = table;
}