var grade = "";
var result = document.querySelector(".result");
var submit = document.getElementById("submit");
var input = document.getElementById("display");

submit.addEventListener("click", function (event) {
  event.preventDefault();
});
submit.addEventListener("click", function () {
    // use parseint for numbers.
    var score = eval(input.value);
  if (score >100) {
      grade = "Invalid-Score";
  }
  if (score >= 70 && score<=100) {
    grade = "A";
    // document.getElementById("result").innerHTML = grade;
  }

  if (score >= 60 && score <= 69) {
      grade = "B";
  }
  if (score >= 50 && score <= 59) {
      grade = "C";
  }
  if (score >= 45 && score <= 49) {
      grade = "D";
      result = grade;
  }
  if (score < 45) {
      grade = "F";
  }
  document.getElementById("result").innerHTML = grade;
});

