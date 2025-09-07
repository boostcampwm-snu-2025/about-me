// print js file succesfuly loaded on console
console.log("loaded main.js");

// select every element that has box1 class
const box1s = document.querySelectorAll('.box1');

// add click event for box1
box1s.forEach(box => {
    box.addEventListener('click', function() {
        
        // add alert
        alert('You clicked Box1!');
    });
});
