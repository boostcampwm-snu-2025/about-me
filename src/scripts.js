// 한국 시간(KST) 기준 현재 시간 표시
function updateKSTTime() {
	const now = new Date();
	const kst = new Date(now.getTime() + (9 * 60 * 60 * 1000) - (now.getTimezoneOffset() * 60 * 1000));
	const hours = String(kst.getHours()).padStart(2, '0');
	const minutes = String(kst.getMinutes()).padStart(2, '0');
	const seconds = String(kst.getSeconds()).padStart(2, '0');
	const timeString = `${hours}:${minutes}:${seconds}`;
	const timeElem = document.getElementById('current-time');
	if (timeElem) {
		timeElem.textContent = `KST ${timeString}`;
	}
}

setInterval(updateKSTTime, 1000);
updateKSTTime();
