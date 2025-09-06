/* main.js */

import "./styles/global.css";
import "./styles/layout.css";

import InfoRow from "./components/InfoRow/InfoRow";
import PhotoOverlay from "./components/PhotoOverlay/PhotoOverlay";

const originalText = "근데 왜 빨간색으로 디자인하셨나요?";

const appHTML = /*html*/ `
  <h1 class="main-title">About Me!</h1>
  
  <section class="info-card info-card__profile">
    ${InfoRow({ question: "이름이 뭔가요?", answer: "최서준" })}
    ${InfoRow({ question: "과는 어디인가요?", answer: "전기정보공학부" })}
    ${InfoRow({ question: "학년은?", answer: "2학년입니다." })}
  </section>

  <section class="info-card info-card__hobby">
    ${InfoRow({
      question: "취미가 뭔가요?",
      answer: "해외축구 시청\n시각디자인\n~알고리즘 문제풀기~\n등등등",
    })}
    ${InfoRow({ question: "뭘 좋아하시나요", answer: "고양이 좋아합니다." })}
    ${InfoRow({ question: "가장 좋아하는 색?", answer: "파란색 좋아합니다." })}
    <button id="change-color-btn" class="btn info-card__btn">${originalText}</button>
  </section>

  <button id="photo-btn" class="btn">사진도 볼래요</button>

  ${PhotoOverlay()}
`;

document.querySelector("#app").innerHTML = appHTML;

const addEventListeners = () => {
  const changeColorBtn = document.querySelector("#change-color-btn");
  const colorOverlay = document.querySelector(".color-overlay");

  const changedText = "빨간색으로 돌아갈래요";

  changeColorBtn.addEventListener("click", () => {
    colorOverlay.classList.toggle("is-active");

    if (colorOverlay.classList.contains("is-active")) {
      changeColorBtn.textContent = changedText;
    } else {
      changeColorBtn.textContent = originalText;
    }
  });

  const photoBtn = document.querySelector("#photo-btn");
  const photoOverlay = document.querySelector(".photo-overlay__container");

  photoBtn.addEventListener("click", () => {
    photoOverlay.classList.add("is-active");
  });
  photoOverlay.addEventListener("click", (event) => {
    /* 딱 검은 오버레이 배경 클릭만을 감지 (이미지, 텍스트 클릭은 감지 못하게) */
    if (event.target === event.currentTarget) {
      photoOverlay.classList.remove("is-active");
    }
  });
};

addEventListeners();

/*
  setTimeout을 통해 초기 렌더링 시간을 보정한 후 js-ready 클래스를 추가
  초기 마운트 시 파란색 애니메이션이 보이는 것을 방지하기 위함
 */
setTimeout(() => {
  document.body.classList.add("js-ready");
}, 0);
