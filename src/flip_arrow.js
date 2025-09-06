// 뒤집힐 카드(.profile-card)와 그 컨테이너(.profile-card-container) DOM 요소를 선택
const flipper = document.querySelector(".profile-card");
const flipper_container = document.querySelector(".profile-card-container");

// 앞/뒤로 넘기는 화살표 버튼 생성
const next_flip_arrow_button = document.createElement("button");
const prev_flip_arrow_button = document.createElement("button");
next_flip_arrow_button.className = "next-flip-arrow-button";
prev_flip_arrow_button.className = "prev-flip-arrow-button";

// 버튼 내부에 들어갈 화살표 이미지 생성
const next_arrow_image = document.createElement("img");
const prev_arrow_image = document.createElement("img");
next_arrow_image.src = "image/next_arrow.png";
prev_arrow_image.src = "image/prev_arrow.png";

// 버튼에 이미지를 각각 추가
next_flip_arrow_button.appendChild(next_arrow_image);
prev_flip_arrow_button.appendChild(prev_arrow_image);

// 컨테이너에 완성된 버튼들을 추가
flipper_container.appendChild(prev_flip_arrow_button);
flipper_container.appendChild(next_flip_arrow_button);

// 카드에 'is-flipped' 클래스를 토글(추가/제거)하여 CSS로 뒤집기 효과를 제어하는 함수
function flip_card() {
    flipper.classList.toggle("is-flipped");
}

// 두 화살표 버튼에 클릭 이벤트가 발생하면 flip_card 함수를 실행하도록 설정
next_flip_arrow_button.addEventListener("click", flip_card);
prev_flip_arrow_button.addEventListener("click", flip_card);