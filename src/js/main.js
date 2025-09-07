// 이 스크립트 파일이 성공적으로 로드되었는지 브라우저 콘솔에 메시지를 출력합니다.
console.log("main.js가 로드되었습니다!");

// 모든 .box 클래스를 가진 요소들을 선택합니다.
const boxes = document.querySelectorAll('.box');

// 각 박스에 대해 클릭 이벤트를 추가합니다.
boxes.forEach(box => {
    box.addEventListener('click', function() {
        // 클릭된 박스에 'clicked' 라는 CSS 클래스를 추가하거나 제거합니다.
        // this.classList.toggle('clicked');
        
        // 간단하게 alert 창을 띄워봅니다.
        alert('박스를 클릭했습니다!');
    });
});