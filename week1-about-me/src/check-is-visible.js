const checkIsVisible = (visibleCallback, invisibleCallback) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleCallback(entry);
          entry.target.classList.add("visible");
        } else {
          invisibleCallback(entry);
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      rootMargin: "-10px",
    }
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in-element");
  const visibleCallback = (entry) => {
    entry.target.classList.add("visible");
  };
  const invisibleCallback = (entry) => {
    entry.target.classList.remove("visible");
  };

  const observer = checkIsVisible(visibleCallback, invisibleCallback);
  fadeElements.forEach((el) => observer.observe(el));
});
