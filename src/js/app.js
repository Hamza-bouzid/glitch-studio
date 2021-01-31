// NAVBAR
const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
  selectElement('.nav-header').classList.toggle('active');
});
