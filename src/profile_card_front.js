// 기본 레이아웃을 위한 왼쪽, 오른쪽 컬럼 생성 및 추가
const profile_card_front = document.querySelector(".profile-card-front");
const left_column = document.createElement("div");
const right_column = document.createElement("div");
left_column.className = "left-column";
right_column.className = "right-column";
profile_card_front.appendChild(left_column);
profile_card_front.appendChild(right_column);


// --- 왼쪽 컬럼: 프로필 사진과 이름 생성 ---
const photo_container = document.createElement("div");
const photo = document.createElement("img");
const profile_name = document.createElement("h2");

photo_container.className = "photo-container";
photo.className = "photo";
profile_name.className = "profile-name";
photo.src = "image/profile_photo.jpg";
profile_name.textContent = "유성현";

left_column.appendChild(photo_container);
left_column.appendChild(profile_name);
photo_container.appendChild(photo);


// --- 오른쪽 컬럼: 연락처 정보 생성 ---

// 연락처 항목(아이콘 + 텍스트)을 생성하는 함수. 코드 반복을 줄이기 위한 용도.
function create_contact_item(icon_src, text) {
    const item_container = document.createElement("div");
    item_container.className = "contact-item";
    const icon = document.createElement("img");
    const content = document.createElement("p");
    icon.src = icon_src;
    content.textContent = text;
    item_container.append(icon, content);
    return item_container;
}

// 연락처 데이터 배열. 데이터 기반으로 UI를 생성하여 유지보수를 용이하게 함.
const contact_items_data = [
    { icon_src: "image/phone.png", text: "010-7629-0201" },
    { icon_src: "image/email.png", text: "shsha0110@gmail.com" },
    { icon_src: "image/instagram.png", text: "@shsha._.0110" }
];

// 데이터 배열을 순회하며 연락처 목록을 동적으로 생성 및 추가
contact_items_data.forEach(item_data => {
    const contact_item = create_contact_item(item_data.icon_src, item_data.text);
    right_column.appendChild(contact_item);
});