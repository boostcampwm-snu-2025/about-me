function toggleImage() {
  const img = document.getElementById("profileImg");
  const btn = document.getElementById("profileImgToggleButton");

  if (img.style.display === "none") {
    img.style.display = "block";
    btn.textContent = "사진 숨기기";
  } else {
    img.style.display = "none";
    btn.textContent = "사진 보기";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("profileImgToggleButton").addEventListener("click", toggleImage);
});