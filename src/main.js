window.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    if (header) {
        // 약간의 지연을 두고 애니메이션 시작
        setTimeout(() => {
            header.classList.add("show");
        }, 170);
    }
    const card = document.getElementById("card");
    if (card) {
        setTimeout(() => {
            card.classList.add("card-show");
        }, 170 + 800);
    }
    const container = document.getElementById("container");
    if (container) {
        setTimeout(() => {
            container.classList.add("show");
        }, 170 + 800 + 1000);
    }

    const cheerContainer = document.getElementById("cheer-container");
    const cheerBtn = document.getElementById("cheer-button");
    const cheerCount = document.getElementById("cheer-counter");
    if (cheerContainer) {
        setTimeout(() => {
            cheerContainer.classList.add("show");
        }, 170 + 800 + 1000 + 700);
    }

    const clickText = document.getElementById("click-text");
    if (clickText) {
        setTimeout(() => {
            clickText.classList.add("show");
        }, 170 + 800 + 1000 + 700 + 300);
    }

    let count = 0;

    cheerBtn.addEventListener("click", () => {
    count++;
    cheerCount.textContent = count;

    
  });
});