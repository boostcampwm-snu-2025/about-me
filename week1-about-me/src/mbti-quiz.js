const sections = document.querySelectorAll(".mbti-quiz-vertical-container");
const quizButtons = document.querySelectorAll(".mbti-quiz-button");
const submitButton = document.getElementById("mbti-submit-button");
const openAnswerButton = document.getElementById("mbti-open-answer-button");
const result = document.getElementById("mbti-result");

const selectedChoices = {
  EI: null,
  SN: null,
  TF: null,
  JP: null,
};

const CORRECT_ANSWER = "INTJ";

quizButtons.forEach((quizButton) => {
  quizButton.addEventListener("click", () => {
    const section = quizButton.parentElement;
    const category = section.dataset.category;
    const value = quizButton.dataset.value;

    section.querySelectorAll(".mbti-quiz-button").forEach((quizButton) => {
      quizButton.classList.remove("mbti-selected");
    });

    quizButton.classList.add("mbti-selected");
    selectedChoices[category] = value;

    checkSubmitButton();
  });
});

const checkSubmitButton = () => {
  const allSelected = Object.values(selectedChoices).every(
    (choice) => choice !== null
  );
  submitButton.disabled = !allSelected;
};

submitButton.addEventListener("click", () => {
  const userAnswer = Object.values(selectedChoices).join("");
  showResult(userAnswer === CORRECT_ANSWER);
});

const showResult = (isCorrect) => {
  result.classList.remove("mbti-correct", "mbti-wrong");
  contentElement.offsetHeight; // CHECK: 읽기 전용 속성을 가져오는 메서드. 본 함수와는 관련 없지만 강제로 클래스가 제거되었음을 인식하기 위한 야매(?)처리 -> 더 좋은 방법 고민해보기

  if (isCorrect) {
    result.textContent = "정답입니다! 저는 INTJ입니다.";
    result.classList.add("mbti-correct");
  } else {
    result.textContent = "땡! 틀렸습니다. 다시 도전해보세요!";
    result.classList.add("mbti-wrong");
  }
};

openAnswerButton.addEventListener("click", () => {
  openAnswer(true);
});

const openAnswer = () => {
  result.classList.remove("mbti-correct", "mbti-wrong");
  contentElement.offsetHeight; // CHECK: 읽기 전용 속성을 가져오는 메서드. 본 함수와는 관련 없지만 강제로 클래스가 제거되었음을 인식하기 위한 야매(?)처리 -> 더 좋은 방법 고민해보기

  result.textContent = "저는 INTJ입니다.";
  result.classList.add("mbti-correct");
};
