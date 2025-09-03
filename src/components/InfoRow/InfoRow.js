/* InfoRow.js */

import "./InfoRow.css";

const InfoRow = ({ question, answer }) => {
  return /*html*/ `
    <div class="info-row">
      <p class="info-row__question">${question}</p>
      <p class="info-row__answer">${answer}</p>
    </div>
  `;
};

export default InfoRow;
