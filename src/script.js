const scoreNode = document.querySelector(".score");
const shuttlecockContainerNode = document.querySelector(
  ".shuttlecock-container"
);
const toggleButtonNode = document.querySelector(".toggle-button");

let score = 0;
const shuttlecocks = [];
const timeoutIds = [];
let shuttlecockStopped = false;

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

  shuttlecocks.push(shuttlecock);
  shuttlecockContainerNode.appendChild(shuttlecock);

  shuttlecock.addEventListener("click", () =>
    handleShuttlecockClick(shuttlecock)
  );

  executeRandomly(() => removeShuttlecock(shuttlecock), 1000, 4000);
  executeRandomly(createShuttlecock, 1000, 3000);
}

function restartShuttlecock() {
  shuttlecockStopped = false;
  toggleButtonNode.textContent = "멈춤";
  executeRandomly(createShuttlecock, 1000, 3000);
}

function stopShuttlecock() {
  timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  shuttlecocks.forEach((shuttle) => shuttle.remove());
  shuttlecockStopped = true;
  toggleButtonNode.textContent = "재시작";
}

function handleToggleButtonClick() {
  shuttlecockStopped ? restartShuttlecock() : stopShuttlecock();
}

toggleButtonNode.addEventListener("click", handleToggleButtonClick);

executeRandomly(createShuttlecock, 0, 5000);
