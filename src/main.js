let hello = document.getElementById("hello");
hello.textContent = "Hello World";
hello.style.fontSize = "50px";
hello.style.color = "blue";
hello.style.margin = "150px";
hello.addEventListener("mouseover",()=>{
    hello.style.color="red";
    hello.style.transform = "scale(1.2)";
})
hello.addEventListener("mouseout",()=>{
    hello.style.color = "blue";
    hello.style.transform="scale(1)";
})
