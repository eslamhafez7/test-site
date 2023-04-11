// const navMenu = document.getElementById('menu'),
// navToggle = document.getElementById('nav_toggle'),
// navClose = document.getElementById('nav_close')

// // Show Menu 
// if(navToggle) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show')
//     })
// }
const navMenu = document.getElementById('menu');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');

// Show Menu 
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // toggle 'show' class
  });
}
