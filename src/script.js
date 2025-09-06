const detailsSectionNode = document.querySelector(".details-section");
const scoreNode = document.querySelector(".score");
const bodyNode = document.querySelector("body");
const timeoutIds = [];

const details = [
  { label: "이름", value: "임찬솔" },
  { label: "전공", value: "인문대학 아시아언어문명학부" },
  { label: "취미", value: "🏸배드민턴" },
  { label: "관심 분야", value: "웹 프론트엔드 개발" },
];
let score = 0;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function executeRandomly(actionFunc, minInterval, maxInterval) {
  const randomDelay = getRandomNumber(minInterval, maxInterval);
  const timeoutId = setTimeout(() => {
    actionFunc();
  }, randomDelay);
  timeoutIds.push(timeoutId);
}

function removeShuttlecock(shuttlecockNode) {
  shuttlecockNode.remove();
}

function increaseScore() {
  score++;
}

function displayScore() {
  scoreNode.textContent = score.toString().padStart(4, "0");
}

function handleShuttlecockClick(shuttlecockNode) {
  removeShuttlecock(shuttlecockNode);
  increaseScore();
  displayScore();
}

function createShuttlecock() {
  const shuttlecock = document.createElement("div");
  shuttlecock.classList.add("shuttlecock");

  shuttlecock.style.width = "50px";
  shuttlecock.style.height = "50px";
  shuttlecock.style.position = "absolute";

  const minX = 0;
  const minY = 0;
  const maxX = window.innerWidth - 50; // 화면 너비 - 50px
  const maxY = window.innerHeight - 50; // 화면 높이 - 50px

  const x = getRandomNumber(minX, maxX);
  const y = getRandomNumber(minY, maxY);

  shuttlecock.style.left = `${x}px`;
  shuttlecock.style.top = `${y}px`;

  bodyNode.appendChild(shuttlecock);

  shuttlecock.addEventListener("click", () =>
    handleShuttlecockClick(shuttlecock)
  );

  executeRandomly(() => removeShuttlecock(shuttlecock), 1000, 4000);
  executeRandomly(createShuttlecock, 1000, 3000);
}

function handleStopButtonClick() {
  timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
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

function initialize() {
  displayDetails();
  executeRandomly(createShuttlecock, 0, 5000);
}
initialize();
