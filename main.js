const namecard1 = document.getElementById("namecard1")
const namecard2 = document.getElementById('namecard2')

namecard1.addEventListener('click', function() {
    namecard1.style.display = 'none';
    namecard2.style.display = 'flex';
})

namecard2.addEventListener('click', function() {
    namecard2.style.display = 'none';
    namecard1.style.display = 'flex';
})