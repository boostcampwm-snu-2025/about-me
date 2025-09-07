// print js file succesfuly loaded on console
console.log("loaded main.js");

// 모든 .box 클래스를 가진 요소들을 선택합니다.
const images = document.querySelectorAll('.box1');

// 각 박스에 대해 클릭 이벤트를 추가합니다.
box1s.forEach(box => {
    box.addEventListener('click', function() {
        // 클릭된 박스에 'clicked' 라는 CSS 클래스를 추가하거나 제거합니다.
        // this.classList.toggle('clicked');
        
        // 간단하게 alert 창을 띄워봅니다.
        alert('박스1를 클릭했습니다!');
    });
});

// 모든 .box 클래스를 가진 요소들을 선택합니다.
const box2s = document.querySelectorAll('.box2');

// 각 박스에 대해 클릭 이벤트를 추가합니다.
box2s.forEach(box => {
    box.addEventListener('click', function() {
        // 클릭된 박스에 'clicked' 라는 CSS 클래스를 추가하거나 제거합니다.
        // this.classList.toggle('clicked');
        
        // 간단하게 alert 창을 띄워봅니다.
        alert('박스2를 클릭했습니다!');
    });
});