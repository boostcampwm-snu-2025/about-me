const detailsSectionNode = document.querySelector(".details-section");
const countNode = document.querySelector(".count-section .count");
const countButtonNode = document.querySelector(".count-section .count-button");

const details = [
  { label: "이름", value: "임찬솔" },
  { label: "전공", value: "인문대학 아시아언어문명학부" },
  { label: "취미", value: "🏸배드민턴" },
  { label: "관심 분야", value: "웹 프론트엔드 개발" },
];
let count = 0;

// 상세 정보들 표시
function displayDetails() {
  details.forEach((detail) => {
    const { label, value } = detail;

    const detailItemNode = document.createElement("div");
    detailItemNode.classList.add("detail-item");

    const labelNode = document.createElement("h4");
    labelNode.classList.add("label");
    labelNode.textContent = label;

    const valueNode = document.createElement("p");
    valueNode.classList.add("value");
    valueNode.textContent = value;

    detailItemNode.append(labelNode, valueNode);
    detailsSectionNode.appendChild(detailItemNode);
  });
}

function increaseCount() {
  count++;
}

function decreaseCount() {
  if (count === 0) {
    alert("셔틀콕 개수는 0보다 작을 수 없습니다.");
    return;
  }
  count--;
}

function displayCount() {
  countNode.textContent = count.toString().padStart(4, "0");
}

// 셔틀콕 클릭 시 개수 증가
function handleCountButtonClick() {
  increaseCount();
  displayCount();
}

// 셔틀콕 우클릭 시 개수 감소
function handleCountButtonRightClick(e) {
  e.preventDefault();
  decreaseCount();
  displayCount();
}

countButtonNode.addEventListener("click", handleCountButtonClick);
countButtonNode.addEventListener("contextmenu", handleCountButtonRightClick);

displayDetails();
