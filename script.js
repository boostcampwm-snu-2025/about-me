document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar a");
  const mainContent = document.getElementById("main-content");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const content = link.getAttribute("data-content");
      mainContent.innerHTML = `
        <h2>저는</h2>
        <p>${content}</p>
      `;
    });
  });
}); // DOM이 모두 준비된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  // 사이드바 안의 모든 메뉴 링크 선택
  const links = document.querySelectorAll(".sidebar a");
  // 메인 콘텐츠 영역 선택
  const mainContent = document.getElementById("main-content");

  // 각 링크에 클릭 이벤트 추가
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // a 태그의 기본 동작(링크로 이동) 막기

      // 클릭된 메뉴의 숨겨진 data-content 값 가져오기
      const content = link.getAttribute("data-content");

      // 메인 영역 내용을 클릭된 메뉴에 맞게 교체
      mainContent.innerHTML = `
        <h2>저는</h2>
        <p>${content}</p>
      `;
    });
  });
});
