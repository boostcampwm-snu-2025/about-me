const time = document.getElementById('time-scouter');

const birth = new Date('2002-05-25');

function counter() {
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