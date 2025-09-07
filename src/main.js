const likes = [
    {title: "Adventure Time", tag: "tv-shows", img: "https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png"},
    {title: "Radiohead", tag: "artists", img: "https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png"},
    {title: "Grand Budapest Hotel", tag: "movies"}
];

const grid = document.querySelector(".project-grid")
likes.forEach(item =>{
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.dataset.tag = item.tag;
    if (item.img){
        const img = document.createElement("img");
        img.src = item.img;
        img.alt=item.title;
        card.appendChild(img);
    }
    const title = document.createElement("h2");
    title.textContent = item.title;
    card.appendChild(title);
    grid.appendChild(card);
})

const tags = document.querySelectorAll(".tag");
const projects = document.querySelectorAll('.project-card');

tags.forEach(tagBtn => {
    tagBtn.addEventListener('click',()=>{
        tags.forEach(t=>t.classList.remove('active'));
        tagBtn.classList.add('active');

        const selectedTag = tagBtn.dataset.tag;

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