const ham = document.querySelector('.ham')
const nav = document.querySelectorAll('ul.nav-links')[0]

ham.addEventListener('click', () => {
  ham.classList.toggle('active')
  nav.classList.toggle('active')
})
