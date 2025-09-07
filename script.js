document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar a");
  const mainContent = document.getElementById("main-content");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const content = link.getAttribute("data-content");
      mainContent.innerHTML = `
        <h2>저는</h2>
        <p>${content}</p>
      `;
    });
  });
});
