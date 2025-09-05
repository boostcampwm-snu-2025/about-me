const countQuery = document.querySelector(".count-section .count");
const countButtonQuery = document.querySelector(".count-section .count-button");

let count = 0;

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
  countQuery.textContent = count.toString().padStart(4, "0");
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

countButtonQuery.addEventListener("click", handleCountButtonClick);
countButtonQuery.addEventListener("contextmenu", handleCountButtonRightClick);
