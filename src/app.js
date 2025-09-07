console.log("app.js loaded");

// ===== Year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Theme toggle =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

const THEME_KEY = 'cvlab-theme'; // 'light' | 'dark' | 'auto'
function applyTheme(theme) {
  const html = document.documentElement;
  if (['light','dark'].includes(theme)) {
    html.setAttribute('data-theme', theme);
  } else {
    html.setAttribute('data-theme', 'auto');
  }
}
function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;
  return 'auto';
}
function currentSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function updateToggleIcon() {
  const mode = document.documentElement.getAttribute('data-theme');
  const effective = mode === 'auto' ? currentSystemTheme() : mode;
  themeToggle.textContent = effective === 'dark' ? '🌙' : '☀️';
  themeToggle.setAttribute('aria-label', `현재 모드: ${effective}. 클릭하여 전환`);
}
function cycleTheme() {
  const now = getPreferredTheme();
  const next = now === 'auto' ? 'light' : now === 'light' ? 'dark' : 'auto';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
  updateToggleIcon();
}
// init
applyTheme(getPreferredTheme());
updateToggleIcon();
themeToggle.addEventListener('click', cycleTheme);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (getPreferredTheme() === 'auto') updateToggleIcon();
});

// --- super simple photo viewer ---
const PHOTOS = [
  { src: 'photos/photo (1).jpg',  caption: 'Haneul Park, Seoul, Korea' },
  { src: 'photos/photo (2).jpg',  caption: 'Trans-Siberian Train, Siberia, Russia' },
  { src: 'photos/photo (3).jpg',  caption: 'Bike Trip to Busan, Yangpyeong, Korea' },
  { src: 'photos/photo (4).jpg',  caption: 'Sunset, Casablanca, Morocco' },
  { src: 'photos/photo (5).jpg',  caption: 'The Sahara Desert, Merzouga, Morocco' },
  { src: 'photos/photo (6).jpg',  caption: 'Serene Lake, Interlaken, Switzerland' },
  { src: 'photos/photo (7).jpg',  caption: 'Tuilp Field, Keukenhof, Netherlands' },
  { src: 'photos/photo (8).jpg',  caption: 'Old City Center, Gdansk, Poland' },
  { src: 'photos/photo (9).jpg',  caption: 'Scenic View, Delft, Netherlands' },
  { src: 'photos/photo (10).jpg', caption: 'Sunflower Field, Giverny, France' },
  { src: 'photos/photo (11).jpg', caption: 'Sunset along Han River, Seoul, Korea' },
  { src: 'photos/photo (12).jpg', caption: 'WTA Tennis Championship, Seoul, Korea' },
  { src: 'photos/photo (13).jpg', caption: 'Gorgeous Bridge, Gyeongju, Korea' },
  
];

const imgEl = document.getElementById('photo');
const capEl = document.getElementById('caption');
const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');

let i = 0;
function show(n) {
  i = (n + PHOTOS.length) % PHOTOS.length;   // loop
  imgEl.src = PHOTOS[i].src;
  imgEl.alt = PHOTOS[i].caption || '';
  capEl.textContent = PHOTOS[i].caption || '';
}

// arrows + (optional) click to advance
prevEl.addEventListener('click', () => show(i - 1));
nextEl.addEventListener('click', () => show(i + 1));

show(0);
