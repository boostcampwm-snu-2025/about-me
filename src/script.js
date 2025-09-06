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
let score = 0;
const shuttlecocks = [];

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function hideShuttlecock(shuttlecockNode) {
  shuttlecockNode.style.display = "none";
}

function handleShuttlecockClick(shuttlecockNode) {
  hideShuttlecock(shuttlecockNode);
  increaseScore();
  displayScore();
}

function createRandomShuttlecock() {
  const shuttlecock = document.createElement("div");
  shuttlecock.classList.add("shuttlecock");

  shuttlecock.style.width = "50px";
  shuttlecock.style.height = "50px";
  shuttlecock.style.position = "absolute";

  const minX = 0;
  const minY = 0;
  const maxX = window.innerWidth - 100; // 화면 너비 - 100px
  const maxY = window.innerHeight - 100; // 화면 높이 - 100px

  const x = getRandomNumber(minX, maxX);
  const y = getRandomNumber(minY, maxY);

  shuttlecock.style.left = `${x}px`;
  shuttlecock.style.top = `${y}px`;

  bodyNode.appendChild(shuttlecock);
  shuttlecocks.push(shuttlecock);

  shuttlecock.addEventListener("click", () =>
    handleShuttlecockClick(shuttlecock)
  );

  executeRandomly(() => hideShuttlecock(shuttlecock), 3000, 8000);
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

function increaseScore() {
  score++;
}

function displayScore() {
  countNode.textContent = score.toString().padStart(4, "0");
}

function initialize() {
  displayDetails();
  executeRandomly(createRandomShuttlecock, 0, 5000);
}
initialize();
