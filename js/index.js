const navbar = document.getElementById('navbar');
// navbar.style.background = 'red';
function myScroll() {
  if (document.documentElement.scrollTop > 100) {
    navbar.classList.add('nabar_fixed');
  } else {
    navbar.classList.remove('nabar_fixed');
  }
}
var typed = new Typed('.type', {
  strings: ['web designer.', 'web developer.'],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});
const navbarToggle = document.querySelector('#navToggle');
const navbarShow = () => {
  navbarToggle.classList.toggle('navbarToggle_show');
};
