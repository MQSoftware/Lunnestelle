const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})



const about = document.querySelector('.aboutUsBox');
window.addEventListener('scroll', () => {
  if (about.getBoundingClientRect().top < window.innerHeight - 100) {
    about.classList.add('visible');
  }
});