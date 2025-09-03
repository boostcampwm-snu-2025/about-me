/* main.js */

import "./styles/global.css";
import "./styles/layout.css";
import InfoRow from "./components/InfoRow/InfoRow";

const appHTML = /*html*/ `
  <h1 class="main-title">About Me!</h1>
  
  <section class="info-card">
    ${InfoRow({ question: "이름이 뭔가요?", answer: "최서준" })}
    ${InfoRow({ question: "과는 어디인가요?", answer: "전기정보공학부" })}
    ${InfoRow({ question: "학년은?", answer: "2학년입니다." })}
  </section>

  <section class="info-card">
    ${InfoRow({
      question: "취미가 뭔가요?",
      answer: "해외축구 시청\n시각디자인\n알고리즘 문제풀기\n등등등",
    })}
    ${InfoRow({ question: "뭘 좋아하시나요", answer: "고양이 좋아합니다." })}
    ${InfoRow({ question: "가장 좋아하는 색?", answer: "파란색 좋아합니다." })}
    <button class="btn">근데 왜 빨간색으로 디자인하셨나요?</button>
  </section>

  <button class="btn">사진도 볼래요</button>
`;

document.querySelector("#app").innerHTML = appHTML;
