const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    rootMargin: "-10px",
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in-element");
  fadeElements.forEach((el) => observer.observe(el));
});
