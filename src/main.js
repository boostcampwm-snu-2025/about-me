/*
 * 웹페이지 내의 이미지를 랜덤으로 바꾸는 기능을 구현
 *
 * 최초로 웹페이지가 불릴 때는 0.jpg로 지정되며
 * 이후에 버튼을 클릭 시 랜덤한 사진으로 변경
 */


// assets 내의 이미지 목록
const images = [
  "assets/0.jpg",
  "assets/1.png",
  "assets/2.jpg",
  "assets/3.png"
];

// 랜덤 이미지가 배치될 요소 연결
const imgElement = document.getElementById("randomImage");
const btn = document.getElementById("changeBtn");

// 버튼 클릭 시 이미지를 랜덤으로 변경
btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  imgElement.src = images[randomIndex];
});