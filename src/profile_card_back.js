// 카드 뒷면 DOM 요소를 선택
const profile_card_back = document.querySelector(".profile-card-back");

// 카드 뒷면의 전체 콘텐츠를 감쌀 컨테이너 생성
const content_container = document.createElement("div");
content_container.className = "profile-card-content-back";
profile_card_back.appendChild(content_container);

// 헤더("About me"), 꼬리말("* Hover over items!") 요소 생성
const header = document.createElement("h1");
header.className = "header";
header.textContent = "About me";

const tail = document.createElement("h2");
tail.className = "tail";
tail.textContent = "* Hover over items!";

// 정보 아이템들을 담을 컨테이너 생성
const items_container = document.createElement("div");
items_container.className = "information-items-container";

// 전체 컨테이너에 헤더, 아이템 컨테이너, 꼬리말 순서로 추가
content_container.appendChild(header);
content_container.appendChild(items_container);
content_container.appendChild(tail);


// 앞면(심볼)과 뒷면(내용)으로 구성된 양면 정보 아이템을 생성하는 함수
function create_information_item(symbol, content) {
    // 아이템 전체 컨테이너 및 앞/뒷면 div 생성
    const item_container = document.createElement("div");
    item_container.className = "information-item";
    
    const item_front = document.createElement("div");
    const item_back = document.createElement("div");
    item_front.className = "information-front";
    item_back.className = "information-back";

    item_container.appendChild(item_front);
    item_container.appendChild(item_back);

    // 앞면에는 심볼(이미지), 뒷면에는 내용(텍스트) 추가
    const front_symbol = document.createElement("img");
    const back_content = document.createElement("p");
    front_symbol.src = symbol;
    back_content.textContent = content;

    item_front.appendChild(front_symbol);
    item_back.appendChild(back_content);

    // 완성된 아이템 요소 반환
    return item_container;
}

// 정보 아이템 생성을 위한 데이터 배열
const items_data = [
    { symbol: "image/SNU.png", content: "I major in sociology and computer science" },
    { symbol: "image/criminology.png", content: "I'm interested in criminology" },
    { symbol: "image/running.png", content: "I run as a hobby" }
];

// 데이터 배열을 순회하며 정보 아이템들을 동적으로 생성 및 추가
items_data.forEach(item_data => {
    const item = create_information_item(item_data.symbol, item_data.content);
    items_container.appendChild(item);
});