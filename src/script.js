  // Dark Mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }
  
  // Clock
  function updateClock() {
    const el = document.getElementById("clock-text");
    if (!el) return;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    el.textContent = `${hh}:${mm}:${ss}`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const darkBtn = document.getElementById("btn-dark");
    if (darkBtn) darkBtn.addEventListener("click", toggleDarkMode);
  
    updateClock();
    setInterval(updateClock, 1000);
  });
  