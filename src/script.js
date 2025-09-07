// 배경색을 바꾸는 함수
function changeBackgroundColor() {
  const colors = ["#eaf6fb", "#f8edeb", "#ffe5ec", "#e6f2ff", "#fdfcdc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// 버튼 이벤트 연결
const btn = document.getElementById("changeColorBtn");
if (btn) {
  btn.addEventListener("click", changeBackgroundColor);
}

let model;
const upload = document.getElementById('upload');
const status = document.getElementById('status');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Load COCO-SSD model
async function loadModel() {
  model = await cocoSsd.load();
  status.innerText = "✅ 모델 준비 완료! 이미지를 업로드하세요.";
  upload.disabled = false;
}
loadModel();

// Handle image upload
upload.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = async () => {
    // Resize canvas
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    // Detect objects
    status.innerText = "객체 인식 중...";
    const predictions = await model.detect(img);

    // Draw results
    predictions.forEach(p => {
      ctx.beginPath();
      ctx.rect(...p.bbox);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#9FB3DF";
      ctx.fillStyle = "#9FB3DF";
      ctx.stroke();
      ctx.fillText(`${p.class} (${Math.round(p.score * 100)}%)`, p.bbox[0], p.bbox[1] > 10 ? p.bbox[1] - 5 : 10);
    });

    status.innerText = `완료 ✅ ${predictions.length}개의 객체를 찾았습니다.`;
  };
});
