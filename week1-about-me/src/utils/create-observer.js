export const createObserver = (visibleCallback, invisibleCallback) => {
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
