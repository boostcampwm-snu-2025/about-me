const ABOUT_ME_CONTENTS = ["김연우", "조경학과", "21학번", "02년생"];

let currentIndex = 0;

// DOM 요소들
const contentContainer = document.getElementById("about-me-slot");
const contentElement = document.getElementById("about-me-content");
const upBtn = document.getElementById("about-me-up-button");
const downBtn = document.getElementById("about-me-down-button");

const updateContent = (direction = "none") => {
  contentElement.classList.remove("slide-up", "slide-down");
  contentElement.offsetHeight; // CHECK: 읽기 전용 속성을 가져오는 메서드. 본 함수와는 관련 없지만 강제로 클래스가 제거되었음을 인식하기 위한 야매(?)처리 -> 더 좋은 방법 고민해보기

  if (direction === "up") {
    contentElement.classList.add("slide-up");
  } else if (direction === "down") {
    contentElement.classList.add("slide-down");
  }
  contentElement.textContent = ABOUT_ME_CONTENTS[currentIndex];
};

const goUp = () => {
  currentIndex =
    (currentIndex - 1 + ABOUT_ME_CONTENTS.length) % ABOUT_ME_CONTENTS.length;
  updateContent("up");
};

const goDown = () => {
  currentIndex = (currentIndex + 1) % ABOUT_ME_CONTENTS.length;
  updateContent("down");
};

upBtn.addEventListener("click", goUp);
downBtn.addEventListener("click", goDown);
