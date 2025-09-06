// 프로필 카드 바탕
const profile_card_container = document.createElement("div");
const profile_card = document.createElement("div");
const left_column = document.createElement("div");
const right_column = document.createElement("div");

profile_card_container.className = "profile-card-container";
profile_card.className = "profile-card";
left_column.className = "left-column";
right_column.className = "right-column";

document.body.appendChild(profile_card_container);
profile_card_container.appendChild(profile_card);
profile_card.appendChild(left_column);
profile_card.appendChild(right_column);

// 사진
const photo_container = document.createElement("div");
const photo = document.createElement("img");
const profile_name = document.createElement("h2");
photo.src = "image/profile_photo.jpg";
profile_name.textContent = "유성현";

photo_container.className = "photo-container";
photo.className = "photo";
profile_name.className = "profile-name"

left_column.appendChild(photo_container);
left_column.appendChild(profile_name);
photo_container.appendChild(photo);

// 정보
function create_contact_item(icon_src, text) {
    const item_container = document.createElement("div");
    item_container.className = "contact-item";

    const icon = document.createElement("img");
    const content = document.createElement("p");

    icon.src = icon_src;
    content.textContent = text;

    item_container.append(icon);
    item_container.append(content);

    return item_container;
}

const phone_container = create_contact_item(icon_src="image/phone.png",
                                                text="010-7629-0201");
const email_container = create_contact_item(icon_src="image/email.png",
                                                text="shsha0110@gmail.com");
const instagram_container = create_contact_item(icon_src="image/instagram.png",
                                                    text="@shsha._.0110");

right_column.appendChild(phone_container);
right_column.appendChild(email_container);
right_column.append(instagram_container);