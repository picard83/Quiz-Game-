const quizContainer = document.querySelector(".quiz-container");
const dynamicArea = document.getElementById("dynamic-area");
const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  quizContainer.innerHTML = "";
  let p = document.createElement("p");

  p.innerText = "ok it worked.. i think ";

  quizContainer.append(p);
});
