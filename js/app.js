const hamburger = document.getElementById('hamburger')


// Menu Slide In and Out Function
hamburger.addEventListener('click', menu)
function menu(e) {
  document.body.classList.toggle('nav-toggle')
  e.target.classList.toggle('typcn-th-menu')
  e.target.classList.toggle('typcn-times')
}