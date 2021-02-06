// NAVBAR
const selectElement = element => document.querySelector(element);
selectElement('.mobile-menu').addEventListener('click', () => {
  selectElement('.nav-header').classList.toggle('active');
});
// SMOOTH SCROOL
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
});
