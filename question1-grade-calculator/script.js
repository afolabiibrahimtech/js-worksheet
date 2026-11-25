function calculateGrade() {
  let name = document.getElementById("studentName").value.trim();
  let markInput = document.getElementById("studentMark").value;
  let result = document.getElementById("result");

  if (name === "") {
    result.innerHTML = "<p class='error'>Please enter the student's name.</p>";
    return;
  }

  if (markInput === "") {
    result.innerHTML = "<p class='error'>Please enter a mark.</p>";
    return;
  }

  let mark = Number(markInput);

  if (mark < 0 || mark > 100) {
    result.innerHTML = "<p class='error'>Invalid mark. Please enter a mark between 0 and 100.</p>";
    return;
  }

  let grade;

  if (mark >= 90) {
    grade = "A";
  } else if (mark >= 80) {
    grade = "B";
  } else if (mark >= 70) {
    grade = "C";
  } else if (mark >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  let status;

  if (grade === "F") {
    status = "<span class='fail'>Failed</span>";
  } else {
    status = "<span class='pass'>Passed</span>";
  }

  result.innerHTML =
    "<p>Student Name: " + name + "</p>" +
    "<p>Student Mark: " + mark + "</p>" +
    "<p>Grade: " + grade + "</p>" +
    "<p>Result: " + status + "</p>";
}