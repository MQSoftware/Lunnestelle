const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

const slider = document.querySelector('.slider ul')
const totalImages = document.querySelectorAll('.slider li').length

let index = 0

setInterval(() => {
  index = (index + 1) % totalImages // Avanza y vuelve a 0 al final
  slider.style.transform = `translateX(-${index * 100}%)`
}, 3000) // Cambia cada 3 segundos


const about = document.querySelector('.aboutUsBox');
window.addEventListener('scroll', () => {
  if (about.getBoundingClientRect().top < window.innerHeight - 100) {
    about.classList.add('visible');
  }
});