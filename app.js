var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var counter = 20;
var timerCountdown = document.getElementById("countdown");
var displayResults = document.getElementById("quiz__results");
var displayQuestions = document.getElementById("quiz__questions");

displayResults.style.display = "none";

function showResults() {
  displayQuestions.style.display = "none";
  displayResults.style.display  = "block";
}

var timer = setTimeout(function() {
  showResults();
}, counter * 1000);

var countdown = setInterval(function() {
    counter--;
    timerCountdown.innerHTML = counter;
  if (counter === 0) {
    stopCountdown();   
    showResults(); 
  }
}, 1000);

function stopCountdown() {
  clearInterval(countdown);
}

var questions = [
  { question: "What college did Ted, Lily and Marshall all attend?",
    answers: [
      "Wesleyan University",
      "New York University",
      "Kenyon College",
      "Cornell University"
    ]},
  { question: "What year is it supposed to be when Ted is telling his two kids about how he met their mom?",
    answers: [
      "2020",
      "2030",
      "2015",
      "2025"
    ]},
  { question: "How many women did Ted date that were NOT the mother?",
    answers: [
      "38",
      "12",
      "8",
      "29"
    ]},
  { question: "What is the name of the bar where the five friends always hung out?",
    answers: [
      "MacLaren's Pub",
      "64 North",
      "Henry's Pub",
      "Dapper Duck"
    ]},
];


var correctAnsArr = [
  "Wesleyan University",
  "2030",
  "29",
  "MacLaren's Pub"
];

for (var i = 0; i < questions.length; i++) {
  var question = questions[i];

  var sec = document.createElement("section");
  sec.className = "quiz__questions--question q" + i;
  sec.innerHTML = `<p>${question.question}</p>`;
  document.getElementById("form").appendChild(sec);

  for (var j = 0; j < question.answers.length; j++) {
        var answer = question.answers[j];
        var div = document.createElement("div");
        var radioBtn = `<input type="radio" name="group${i}" value="${answer}">`
        div.innerHTML = radioBtn + " " + answer;
        document.querySelector(".q" + i).appendChild(div);
    }
}

var form = document.forms["form"];
    form.addEventListener("submit", 

function(event) {
    event.preventDefault();
    stopCountdown();

    for (var i = 0; i < form.children.length; i++) {
        var found = "";
        for (var j = 0; j < form["group" + i].length; j++) {
    
            if (form["group" + i][j].checked) {
                found = form["group" + i][j].value;
            }
        }

        if (found === correctAnsArr[i]) {
            correctAns += 1;
            found = "";
        }   

        else if (found === "") {
            unanswered += 1;
        }       

        else {incorrectAns += 1;}   
    }

  document.getElementById("correct").innerHTML = correctAns;
  document.getElementById("incorrect").innerHTML = incorrectAns;
  document.getElementById("unanswered").innerHTML = unanswered;
  showResults();
});