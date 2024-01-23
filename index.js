const quizContainer = document.querySelector(".quiz-container");
const dynamicArea = document.getElementById("dynamic-area");
const startBtn = document.querySelector(".start-btn");
let initials = document.createElement("INPUT");
let message = document.createElement("p");
let currentIndex = 0;
let correctClicks = 0;

const questions = [
  //question 1
  {
    question: "How many bones are in the human body ?",
    answers: ["1", "206", "309", "Zero"],
    correctAnswer: "206",
  },
  //question 2
  {
    question: "What is the capitol of florida ?",
    answers: ["Georgia", "France", "Tallahassee", " West Palm Beach"],
    correctAnswer: "Tallahassee",
  },
  //question 3
  {
    question: "What is a group of fish called ?",
    answers: ["Gang", "Crew", "Squad", "School "],
    correctAnswer: "School",
  },
  //question 4
  {
    question: "What does HTML stand for? ?",
    answers: [
      "HyperText Markup Language",
      "How To Mush Leafs",
      "Hot Tortillas Move London",
      "Happy To Move Larry",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  //question 5
  {
    question: "How many NFL teams are there ?",
    answers: ["22", "32", "17", "40 "],
    correctAnswer: "32",
  },
  // question 6
  {
    question: "What number does Lebron James wear Currently ?",
    answers: ["24", "2", "23", "3 "],
    correctAnswer: "23",
  },
  //question 7
  {
    question: "How do you stop a setInterval()?",
    answers: [
      "clearInterval()",
      "It will stop on it's own after it runs once",
      "it can't be stopped",
      "clearInterval(var)",
    ],
    correctAnswer: "clearInterval(var)",
  },
  //question 8
  {
    question: "An img tag must use which of the following",
    answers: ["a", "href", "src", "p"],
    correctAnswer: "src",
  },
  //question 9
  {
    question: "In javascript functions are...",
    answers: ["elements", "used in HTML files", "objects", "hoisted"],
    correctAnswer: "hoisted",
  },
  //question 10
  {
    question: "Which of the following is a CSS Framework",
    answers: ["Chinstrap", "Bootstrap", "Jockstrap", "strapstrap"],
    correctAnswer: "Bootstrap",
  },
];

startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  showQuiz();
});

quizContainer.addEventListener("click", function (e) {
  // console.log(e.target);
  e.preventDefault();
  // if (e.target.innerText === questions[(0, 1)].correctAnswer) {
  //   e.target.style.backgroundColor = "lightgreen";
  // } else if (e.target.classList.contains("answers")) {
  //   e.target.style.backgroundColor = "darkred";
  // }
});

function showQuiz() {
  if (currentIndex > questions.length - 1) {
    alert("Quiz is done!");
    initialsInput();
    return correctClicks;
  }
  quizContainer.innerHTML = "";
  let div = document.createElement("div");

  //question 1
  div.innerHTML = `<p class='question1'> ${questions[currentIndex].question} </p>
  <button class='answers'> ${questions[currentIndex].answers[0]}
  </button><br>
  <button class='answers'> ${questions[currentIndex].answers[1]}
  </button><br>
  <button class='answers'> ${questions[currentIndex].answers[2]}
  </button><br>
  <button class='answers'> ${questions[currentIndex].answers[3]}
  </button>`;

  // console.log(e.target);

  quizContainer.append(div);

  checkAnswers();
}

function checkAnswers() {
  let answerChoices = document.querySelectorAll(".answers");

  answerChoices.forEach(function (answer) {
    answer.addEventListener("click", function (e) {
      // Add your logic for handling theal clicked answer here
      //question 2
      if (e.target.innerText === questions[currentIndex].correctAnswer) {
        // console.log("thats right");
        correctClicks++;
      } else {
      }
      currentIndex++;
      showQuiz();
    });
  });
}

function initialsInput() {
  if (currentIndex > questions.length - 1) {
    quizContainer.innerText = " ";

    message.innerText = "ENTER YOUR INITALS TO SAVE YOUR SCORE !";
    message.style.textDecoration = "underline";
    initials.setAttribute("type", "text");

    quizContainer.append(message);
    quizContainer.append(initials);

    submittingInitalsAndScore();
  }
}

function submittingInitalsAndScore() {
  let sumbmitBtn = document.createElement("button");
  sumbmitBtn.innerText = " SUBMIT ";
  sumbmitBtn.style.marginTop = "15px";
  sumbmitBtn.style.backgroundColor = "lightgreen";
  quizContainer.append(sumbmitBtn);

  sumbmitBtn.addEventListener("click", function () {
    console.log(initials.value);
  });
}
