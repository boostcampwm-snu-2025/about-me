const likes = [
    {title: "Adventure Time", tag: "tv-shows", img: "https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png"},
    {title: "Radiohead", tag: "artists", img: "https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png"},
    {title: "연어초밥", tag: "food", img: "https://sitem.ssgcdn.com/11/30/58/item/1000053583011_i1_750.jpg"},
    {title: "Ethel Cain", tag: "artists", img: "https://upload.wikimedia.org/wikipedia/en/7/74/Preachers_daughter_ethel_cain.png"},
    {title: "The Lego Movie", tag: "movies", img: "https://upload.wikimedia.org/wikipedia/en/1/10/The_Lego_Movie_poster.jpg"},
    {title: "The Wind-Up Bird Chronicle", tag: "books", img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Wind-up_Bird_Chronicle.jpg"},
    {title: "Blade Runner 2049", tag: "movies", img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png"},
    {title: "Eternal Sunshine of the Spotless Mind", tag: "movies", img: "https://upload.wikimedia.org/wikipedia/en/a/a4/Eternal_Sunshine_of_the_Spotless_Mind.png"},
    {title: "Car Seat Headrest", tag: "artists", img: "https://i5.walmartimages.com/asr/aa35046e-a425-4901-af61-6806aaeaa238.a77272cdadeda43169ef2eae7895bb9b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"},
    {title: "Succession", tag: "tv-shows", img: "https://upload.wikimedia.org/wikipedia/en/3/3f/Succession_season_1.jpg"},
    {title: "Serial Experiment Lain", tag: "tv-shows", img: "https://upload.wikimedia.org/wikipedia/en/c/cd/Serial_Experiments_Lain_%28video_game%29.jpg"},
    {title: "윙스탑 <3", tag: "food", img: "https://olo-images-live.imgix.net/10/10ed02bdef9d4cc68a1aa74dc07dbf2c.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=524&h=350&fit=crop&fm=png32&s=63810b45f0cd625e57711fdcc29d0c01"}
];

const projectList = [
    {title: "가지도 않을 표를 사는 사람들", url: "https://zoo-zer0.github.io/tickets-mid/", tag: "data-visualization,interactive", img: "https://zoo-zer0.github.io/img/project/ticket.png", description: "Translation: <em>Those Who Buy Tickets They Never Intend to Use</em><br><br>We investigated Korea’s secondary ticket market by reverse-engineering Ticket Bay and building a daily crawler to track listings. Our analysis uncovered how a small group of resellers dominate the market, inflating prices far beyond face value. The interactive site visualizes these patterns, letting you explore resale price gaps by game and even down to seat level.<br><br><em>Python, HTML, CSS, Javascript, D3.js</em></p>"},
    {title: "Cold Plunges for Him: When the For You Page Isn't for Me", url:"https://zoo-zer0.github.io/project5/", tag: "data-visualization,writing", img: "https://zoo-zer0.github.io/img/project/cold%20plunge.jpg", description: "An analysis of 212 PubMed articles revealed that most cold therapy studies excluded women, yet this bias disappears as findings spread into health media. This project traces how advice based on male physiology gets generalized into universal wellness claims.<p><em>Python, HTML, CSS, Javascript, D3.js</em></p>"},
    {title: "The SNU Quill 82nd Edition", url: "https://snuquill-public-s3.s3.ap-northeast-2.amazonaws.com/magazine/82.pdf", tag: "writing", img: "https://zoo-zer0.github.io/img/project/snuquill.png", description: "          Served as Editor-in-Chief of the 82nd edition of Seoul National University’s English magazine. Oversaw reporting, editing, and design to publish stories on campus politics, culture, and international affairs."},
];
function generateCards(containerSelector, items){
    const grid = document.querySelector(containerSelector);
    grid.innerHTML = "";
    items.forEach(item=>{
        const link = document.createElement("a");
        link.href = item.url || "#";
        link.target = "_blank";
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.dataset.tag = item.tag || "";
        if (item.img){
            const img = document.createElement("img");
            img.src = item.img;
            img.alt=item.title;
            card.appendChild(img);
        }
        const title = document.createElement("h2");
        title.textContent = item.title;
        card.appendChild(title);
        if (item.description){
            const desc = document.createElement("p");
            desc.innerHTML=item.description;
            card.appendChild(desc);
        }
        link.appendChild(card);
        grid.appendChild(link); //important!! wrap the card with link and add link to grid
    })
}
generateCards(".likes .project-grid", likes);
generateCards(".projects .project-grid", projectList);

const tags = document.querySelectorAll(".tag");

tags.forEach(tagBtn => {
    tagBtn.addEventListener('click',()=>{
        tags.forEach(t=>t.classList.remove('active'));
        tagBtn.classList.add('active');

        const selectedTag = tagBtn.dataset.tag;
        const projects = document.querySelectorAll(".project-card");
        projects.forEach(project=>{
            const projectTag = project.dataset.tag;
            if (selectedTag === 'all'|| projectTag.includes(selectedTag)){
                project.style.display = 'block';
            } else{
                project.style.display = 'none';
            }
        });
    });
});