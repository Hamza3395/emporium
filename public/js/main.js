let titre = document.querySelectorAll('#navbarsExample08 a')
let nav = document.querySelector('nav')
let titreBouton = document.querySelectorAll('nav i')
let header = document.getElementsByTagName('header')[0]
let section2 = document.getElementById('section2')
let titrePrincipalSection2 = document.querySelectorAll('#section2 h4')
let titre2 = document.querySelectorAll('#section2 h5')
let section4 = document.getElementsByClassName('section4')[0]
let section5 = document.getElementsByClassName('section5')[0]
let titrePrincipalSection4 = document.querySelectorAll('.section4 h4')
let btnBlack = document.getElementsByClassName('btnBlack')[0]
let navH4 = document.querySelectorAll('nav h4')
let emporium1 = document.getElementsByClassName('emporium')[0]
let navBout = document.querySelectorAll('.navPrincipal button')[0]
let carouselTxt = document.querySelectorAll('.carouselDiv div')
let carouselH3 = document.querySelectorAll('.carouselDiv h3')
let carouselI = document.querySelectorAll('.carouselDiv i')

function moveToBlack() {
  emporium1.style.color = 'white'
  nav.style.backgroundColor = 'black'
  navBout.style.backgroundColor = 'white'
  header.style.backgroundColor = 'black'
  for (i = 0; i < carouselTxt.length; i++) {
    carouselTxt[i].classList.add('text-white')
    carouselTxt[i].classList.remove('text-dark')
  }
  for (i = 0; i < carouselI.length; i++) {
    carouselI[i].classList.add('text-white')
    carouselI[i].classList.remove('text-dark')
  }
  for (i = 0; i < carouselH3.length; i++) {
    carouselH3[i].classList.add('text-white')
    carouselH3[i].classList.remove('text-dark')
  }
  for (i = 0; i < titre.length; i++) {
    titre[i].classList.add('text-white')
    titre[i].classList.remove('text-dark')
  }
  for (i = 0; i < navH4.length; i++) {
    navH4[i].classList.add('text-white')
    navH4[i].classList.remove('text-dark')
  }
  for (i = 0; i < titreBouton.length; i++) {
    titreBouton[i].classList.add('text-white')
    titreBouton[i].classList.remove('text-dark')
  }
  section2.style.backgroundColor = 'black'
  for (i = 0; i < titrePrincipalSection2.length; i++) {
    titrePrincipalSection2[i].classList.add('text-white')
    titrePrincipalSection2[i].classList.remove('text-dark')
  }
  for (i = 0; i < titre2.length; i++) {
    titre2[i].classList.add('text-white')
    titre2[i].classList.remove('text-dark')
  }
  section4.style.backgroundColor = 'black'
  section5.style.backgroundColor = 'black'
  for (i = 0; i < titrePrincipalSection4.length; i++){
    titrePrincipalSection4[i].classList.add('text-white')
    titrePrincipalSection4[i].classList.remove('text-dark')
  }
}

btnBlack.addEventListener('click', moveToBlack)



let btnWhite = document.getElementsByClassName('btnWhite')[0]

function moveToWhite() {
  emporium1.style.color = 'black'
  nav.style.backgroundColor = 'white'
  header.style.backgroundColor = 'white'
  for (i = 0; i < titre.length; i++) {
    titre[i].classList.add('text-dark')
    titre[i].classList.remove('text-white')
  }
  for (i = 0; i < carouselTxt.length; i++) {
    carouselTxt[i].classList.add('text-dark')
    carouselTxt[i].classList.remove('text-white')
  }
  for (i = 0; i < carouselI.length; i++) {
    carouselI[i].classList.add('text-dark')
    carouselI[i].classList.remove('text-white')
  }
  for (i = 0; i < carouselH3.length; i++) {
    carouselH3[i].classList.add('text-dark')
    carouselH3[i].classList.remove('text-white')
  }
  for (i = 0; i < navH4.length; i++) {
    navH4[i].classList.add('text-dark')
    navH4[i].classList.remove('text-white')
  }
  for (i = 0; i < titreBouton.length; i++) {
    titreBouton[i].classList.add('text-dark')
    titreBouton[i].classList.remove('text-white')
  }
  section2.style.backgroundColor = 'white'
  for (i = 0; i < titrePrincipalSection2.length; i++) {
    titrePrincipalSection2[i].classList.add('text-dark')
    titrePrincipalSection2[i].classList.remove('text-white')
  }
  for (i = 0; i < titre2.length; i++) {
    titre2[i].classList.add('text-dark')
    titre2[i].classList.remove('text-white')
  }
  section4.style.backgroundColor = 'white'
  section5.style.backgroundColor = 'white'
  for (i = 0; i < titrePrincipalSection4.length; i++){
    titrePrincipalSection4[i].classList.add('text-dark')
    titrePrincipalSection4[i].classList.remove('text-white')
  }
}
btnWhite.addEventListener('click', moveToWhite)



var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var navbar = document.getElementsByClassName("navPrincipal")[0]
var stick = navbar.offsetTop
var emporiumScroll = document.getElementsByClassName('emporiumScroll')[0]

function stickyNavigation () {
  if (window.pageYOffset >= stick) {
    navbar.classList.add("fixed-nav")
    emporiumScroll.style.display = ''
  } else {
    navbar.classList.remove("fixed-nav");
    emporiumScroll.style.display = 'none'
  }
}
window.addEventListener('scroll',stickyNavigation)

// CAROUSEL

let slideDiv = document.getElementsByClassName('slide')[0]
let colMza = document.querySelectorAll(".col .div-carousel")
let carouselBtn = document.querySelectorAll('.section4 a')


function slide(event) {
  let pos = event.currentTarget.dataset.position;
  slideDiv.style.transform = 'translateX(' + -13 * pos + '%)'
  slideDiv.style.transition = 'all 1s ease'
    event.preventDefault()
}

carouselBtn[0].addEventListener('click', slide)
carouselBtn[1].addEventListener('click', slide)
carouselBtn[2].addEventListener('click', slide)
carouselBtn[3].addEventListener('click', slide)
carouselBtn[4].addEventListener('click', slide)
carouselBtn[5].addEventListener('click', slide)
carouselBtn[6].addEventListener('click', slide)