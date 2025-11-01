const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const menuToggle = document.querySelector('.menu-toggle');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  revealOnScroll();
});

function toggleMenu() {
  const isActive = menu.classList.toggle('active');
  overlay.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isActive);
}

function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', false);
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

revealOnScroll();
