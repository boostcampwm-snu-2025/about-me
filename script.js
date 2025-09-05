const ImaiImg = document.getElementById('imai-logo');
const seesImg = document.getElementById('sees-logo');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  if (ImaiImg.style.filter === 'invert(1)' && seesImg.style.filter === 'invert(1)') {
    ImaiImg.style.filter = 'invert(0)';
    seesImg.style.filter = 'invert(0)';
  } else {
    ImaiImg.style.filter = 'invert(1)';
    seesImg.style.filter = 'invert(1)';
  }
});

