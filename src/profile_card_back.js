// 프로필 카드 바탕
const profile_card_container = document.createElement("div");
const profile_card = document.createElement("div");

profile_card_container.className = "profile-card-container-back";
profile_card.className = "profile-card-back";

document.body.appendChild(profile_card_container);

// header
const header = document.createElement("h1");
header.className = "header";
header.textContent = "About me";

// tail
const tail = document.createElement("h2");
tail.className = "tail";
tail.textContent = "* Hover over items!"

profile_card_container.appendChild(header);
profile_card_container.appendChild(profile_card);
profile_card_container.appendChild(tail);

// 정보
function create_information_item(symbol, content) {
    const item_container = document.createElement("div");
    item_container.className = "information-item";
    
    const item_front = document.createElement("div");
    const item_back = document.createElement("div");
    item_front.className = "information-front";
    item_back.className = "information-back";

    item_container.appendChild(item_front);
    item_container.appendChild(item_back);

    const front_symbol = document.createElement("img");
    const back_content = document.createElement("p");
    front_symbol.src = symbol;
    back_content.textContent = content;

    item_front.appendChild(front_symbol);
    item_back.appendChild(back_content);

    return {
        container: item_container, 
        front: item_front, 
        back: item_back
    };
}

const items_data = [
    { symbol: "image/SNU.png", content: "I major in sociology and computer science" },
    { symbol: "image/criminology.png", content: "I'm interested in criminology" },
    { symbol: "image/running.png", content: "I run as a hobby" }
];

items_data.forEach(item_data => {
    const { container } = create_information_item(item_data.symbol, item_data.content);
    profile_card.appendChild(container);
});

profile_card.appendChild(major);
profile_card.appendChild(interest);
profile_card.appendChild(hobby);