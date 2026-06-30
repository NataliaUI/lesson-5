const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const heroVisual = document.querySelector('.hero-visual');
const storedTheme = localStorage.getItem('theme');

const applyTheme = (theme) => {
  body.classList.toggle('light', theme === 'light');
  body.classList.toggle('dark', theme !== 'light');
  localStorage.setItem('theme', theme);
};

if (storedTheme === 'light' || storedTheme === 'dark') {
  applyTheme(storedTheme);
} else {
  applyTheme('dark');
}

themeToggle.addEventListener('click', () => {
  const nextTheme = body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(nextTheme);
});

window.addEventListener('scroll', () => {
  if (!heroVisual) return;
  const offset = window.scrollY * 0.16;
  heroVisual.style.transform = `translateY(${offset}px)`;
});
