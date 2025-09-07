// 배경색을 바꾸는 함수
function changeBackgroundColor() {
  const colors = ["#eaf6fb", "#f8edeb", "#ffe5ec", "#e6f2ff", "#fdfcdc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// 버튼 이벤트 연결
document.getElementById("changeColorBtn").addEventListener("click", changeBackgroundColor);
