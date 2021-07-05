import { arr } from "./ques.js";

const question_El = document.querySelector(".question");
const score_El = document.querySelector("span");
const option_p_El = document.querySelectorAll(".option-p");
const option_btn_El = document.querySelectorAll(".option-btn");
const leftBtn = document.querySelector(".previous");
const rightBtn = document.querySelector(".next");
const remaining = document.querySelector(".remaining p");

let idx = 0;
let score = 0;

loadQuestions();

// show correct and incorrect answer
function showAnswer(idx) {
  option_btn_El.forEach((btn) => {
    btn.disabled = true;
    btn.classList.add("incorrect");
    option_btn_El[arr[idx].answer - 1].classList.add("correct");
  });
}

// remove colors from button when user goes to next/previous page
function removeAnswer() {
  option_btn_El.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("incorrect");
    btn.classList.remove("correct");
  });
}

// renders question and options in page
function loadQuestions() {
  if (arr[idx].completed) {
    showAnswer(idx);
  }
  question_El.innerHTML = arr[idx].question;

  option_p_El.forEach((option, index) => {
    option.innerHTML = arr[idx][`option${index + 1}`];
  });

  remaining.innerText = `Questions ${idx + 1} of 5`;
}

// calls checkanswer based on which option user clicked
option_btn_El.forEach((btn) => {
  btn.addEventListener("click", () => {
    checkAnswer(btn);
  });
});

// calls showAnswer and increment score if answer is correct
function checkAnswer(btn) {
  showAnswer(idx);
  if (btn.value == arr[idx].answer) {
    score++;
    score_El.innerText = `Score: ${score}`;
    arr[idx].completed = true;
  }
  if (score === 5) {
    alert("You won!");
  }
}

// event to go to previous question
leftBtn.addEventListener("click", () => {
  if (idx > 0 && idx <= 4) {
    idx--;
    removeAnswer();
    loadQuestions();
  }
});

// event to go to next question
rightBtn.addEventListener("click", () => {
  if (idx >= 0 && idx < 4) {
    idx++;
    removeAnswer();
    loadQuestions();
  }
});