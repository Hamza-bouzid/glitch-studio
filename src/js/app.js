// NAVBAR
const selectElement = element => document.querySelector(element);
const closeNavbar = document.querySelector('.close-navbar');

selectElement('.mobile-menu').addEventListener('click', () => {
  selectElement('.nav-header').classList.toggle('active');
});
selectElement('#logo-nav').addEventListener('click', () => {
  selectElement('.nav-header').classList.remove('active');
});
selectElement('#link1-nav').addEventListener('click', () => {
  selectElement('.nav-header').classList.toggle('active');
});
selectElement('#link2-nav').addEventListener('click', () => {
  selectElement('.nav-header').classList.toggle('active');
});
selectElement('#link3-nav').addEventListener('click', () => {
  selectElement('.nav-header').classList.toggle('active');
});
selectElement('#link4-nav').addEventListener('click', () => {
  selectElement('.nav-header').classList.toggle('active');
});
selectElement('#link5-nav').addEventListener('click', () => {
  selectElement('.nav-header').classList.toggle('active');
});
selectElement('#link6-nav').addEventListener('click', () => {
  selectElement('.nav-header').classList.toggle('active');
});


// SMOOTH SCROOL
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900,
});