/* InfoRow.js */

import "./InfoRow.css";

/* 물결(~)로 감싸진 부분을 감지해 취소선 속성을 넣는 함수 */
const formatAnswer = (answer) => {
  const answerParts = answer.split("~");

  const formattedParts = answerParts.map((part, index) => {
    if (index % 2 === 1) {
      return /*html*/ `<del class="info-row__deleted">${part}</del>`;
    } else {
      return part;
    }
  });

  return formattedParts.join("");
};

const InfoRow = ({ question, answer }) => {
  return /*html*/ `
    <div class="info-row">
      <p class="info-row__question">${question}</p>
      <p class="info-row__answer">${formatAnswer(answer)}</p>
    </div>
  `;
};

export default InfoRow;
