nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav) {
  console.log(window.scrollY)
  if (window.scrollY > 223) {
    nav.classList.add('active') } else {
    nav.classList.remove('active')
  }
}
