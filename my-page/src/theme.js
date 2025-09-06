const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '☀️';
    }
}

themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
});
