const detailsSectionNode = document.querySelector(".details-section");
const countNode = document.querySelector(".count-section .count");
const countButtonNode = document.querySelector(".count-section .count-button");
const bodyNode = document.querySelector("body");

const details = [
  { label: "이름", value: "임찬솔" },
  { label: "전공", value: "인문대학 아시아언어문명학부" },
  { label: "취미", value: "🏸배드민턴" },
  { label: "관심 분야", value: "웹 프론트엔드 개발" },
];
let count = 0;
const shuttlecocks = [];

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function hideShuttlecock(shuttlecockNode) {
  shuttlecockNode.style.display = "none";
}

function createRandomShuttlecock() {
  const div = document.createElement("div");
  div.classList.add("shuttlecock");

  div.style.width = "50px";
  div.style.height = "50px";
  div.style.position = "absolute";

  const minX = 0;
  const minY = 0;
  const maxX = window.innerWidth - 100; // 화면 너비 - 100px
  const maxY = window.innerHeight - 100; // 화면 높이 - 100px

  const x = getRandomNumber(minX, maxX);
  const y = getRandomNumber(minY, maxY);

  div.style.left = `${x}px`;
  div.style.top = `${y}px`;

  bodyNode.appendChild(div);
  shuttlecocks.push(div);

  executeRandomly(() => hideShuttlecock(div), 3000, 8000);
  executeRandomly(createRandomShuttlecock, 2000, 5000);
}

function executeRandomly(actionFunc, minInterval, maxInterval) {
  const randomDelay = getRandomNumber(minInterval, maxInterval);
  setTimeout(() => {
    actionFunc();
  }, randomDelay);
}

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
  createRandomShuttlecock();
}

// 셔틀콕 우클릭 시 개수 감소
function handleCountButtonRightClick(e) {
  e.preventDefault();
  decreaseCount();
  displayCount();
}

countButtonNode.addEventListener("click", handleCountButtonClick);
countButtonNode.addEventListener("contextmenu", handleCountButtonRightClick);

function initialize() {
  displayDetails();
  executeRandomly(createRandomShuttlecock, 0, 5000);
}
initialize();
