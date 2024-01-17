const quizContainer = document.querySelector(".quiz-container");
const dynamicArea = document.getElementById("dynamic-area");
const startBtn = document.querySelector(".start-btn");

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
    answers: ["Georgia", "France", "Tallahassee", "Palm Beach"],
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
    question: "What number does Lebron James Wear ?",
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
  quizContainer.innerHTML = "";
  let div = document.createElement("div");
  e.preventDefault();
  div.innerHTML = `<p class='question1'> ${questions[0].question} </p>
  <button class='answers'> ${questions[0].answers[0]}
  </button><br>
  <button class='answers'> ${questions[0].answers[1]}
  </button><br>
  <button class='answers'> ${questions[0].answers[2]}
  </button><br>
  <button class='answers'> ${questions[0].answers[3]}
  </button>`;
  console.log(e.target);

  quizContainer.append(div);
});

quizContainer.addEventListener("click", function (e) {
  // console.log(e.target);
  e.preventDefault();
  if (e.target.innerText === questions[0].correctAnswer) {
    e.target.style.backgroundColor = "lightgreen";
  } else {
    e.target.style.backgroundColor = "darkred";
  }
  console.log(e.target);
});
