// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (navToggle) {
	navToggle.addEventListener("click", () => {
		const isOpen = nav.classList.toggle("open");
		navToggle.setAttribute("aria-expanded", String(isOpen));
	});
}

// Smooth scroll (native behavior is fine on modern browsers, but ensure offset nav)
document.querySelectorAll('a[href^="#"]').forEach((a) => {
	a.addEventListener("click", (e) => {
		const id = a.getAttribute("href");
		if (id.length > 1) {
			e.preventDefault();
			document
				.querySelector(id)
				?.scrollIntoView({ behavior: "smooth", block: "start" });
			nav?.classList.remove("open");
			navToggle?.setAttribute("aria-expanded", "false");
		}
	});
});

// Scrollspy: highlight current section in nav
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			const id = entry.target.getAttribute("id");
			const link = navLinks.find((a) => a.getAttribute("href") === `#${id}`);
			if (!link) return;
			if (entry.isIntersecting) {
				navLinks.forEach((a) => a.classList.remove("is-active"));
				link.classList.add("is-active");
			}
		});
	},
	{ rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach((s) => observer.observe(s));
