const button = document.getElementById('load');
const cats = document.querySelectorAll('.cat .hidden');

let order = 0;

function update() {     // 숨겨져 있던 사진을 클래스에서 제외하는 함수
    if (order < cats.length) {
        cats[order].classList.remove('hidden');
        order++;
    }
    if (order >= cats.length) {
        button.style.display = 'none';
    }
}

button.addEventListener('click', update);


const time = document.getElementById('time-scouter');

const birth = new Date('2002-05-25');

function counter() {        // 태어난 날로부터 시간 계산하는 함수
    const current = new Date();
    const diff = current - birth;
    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hour = Math.floor(diff / 1000 / 60 / 60 % 24);
    const minute = Math.floor(diff / 1000 / 60 % 60);
    const sec = Math.floor(diff / 1000 % 60);
    time.textContent = `${day}일 ${hour}시간 ${minute}분 ${sec}초`;
}

setInterval(counter, 1000);

counter();