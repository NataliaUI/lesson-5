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

const pollModal = document.getElementById('pollModal');
const pollForm = document.getElementById('pollForm');
const pollSeen = localStorage.getItem('pollSeen');

if (!pollSeen) {
  pollModal.classList.add('active');
}

pollForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selected = pollForm.team.value;
  localStorage.setItem('pollSeen', 'true');
  pollModal.classList.remove('active');
  console.log('Poll submitted:', selected);
});

window.addEventListener('scroll', () => {
  if (!heroVisual) return;
  const offset = window.scrollY * 0.16;
  heroVisual.style.transform = `translateY(${offset}px)`;
});
