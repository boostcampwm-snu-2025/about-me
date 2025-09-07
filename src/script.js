const scoreNode = document.querySelector(".score");
const shuttlecockContainerNode = document.querySelector(
  ".shuttlecock-container"
);
const toggleButtonNode = document.querySelector(".toggle-button");

let score = 0;
const shuttlecocks = [];
const createdTimeoutIds = [];
let shuttlecockStopped = false;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function executeRandomly(actionFunc, minInterval, maxInterval) {
  const randomDelay = getRandomNumber(minInterval, maxInterval);

  return setTimeout(() => {
    actionFunc();
  }, randomDelay);
}

function removeShuttlecock(shuttlecockNode) {
  clearTimeout(shuttlecockNode.timeoutId);
  const index = shuttlecocks.indexOf(shuttlecockNode);
  if (index !== -1) {
    shuttlecocks.splice(index, 1);
  }
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

// 셔틀콕 생성
function createShuttlecock() {
  if (shuttlecockStopped) return;

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

  const timeoutId = executeRandomly(
    () => removeShuttlecock(shuttlecock),
    1000,
    4000
  );
  // 유저 클릭으로 노드가 없어졌을 경우 자동 삭제 setTimeout을 직접 clear하기 위함
  shuttlecock.timeoutId = timeoutId;

  createShuttlecockRandomly();
}

// 무작위 간격으로 셔틀콕 생성
function createShuttlecockRandomly(minDelay = 1000, maxDelay = 3000) {
  const createdTimeoutId = executeRandomly(
    createShuttlecock,
    minDelay,
    maxDelay
  );
  createdTimeoutIds.push(createdTimeoutId);
}

function restartShuttlecock() {
  shuttlecockStopped = false;
  toggleButtonNode.textContent = "멈춤";
  createShuttlecockRandomly();
}

function stopShuttlecock() {
  // 예정된 셔틀콕 생성 전부 취소
  createdTimeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  createdTimeoutIds.length = 0;

  shuttlecocks.forEach((shuttle) => removeShuttlecock(shuttle));

  shuttlecockStopped = true;
  toggleButtonNode.textContent = "재시작";
}

function handleToggleButtonClick() {
  shuttlecockStopped ? restartShuttlecock() : stopShuttlecock();
}

toggleButtonNode.addEventListener("click", handleToggleButtonClick);

createShuttlecockRandomly(0, 5000);
