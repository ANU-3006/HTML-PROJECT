const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
const scrollHeader=()=>{
    const headeer=document.getElementById('header')
    this.scrollY>=50?Headers.classList.add('bg-header')
                    :Headers.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
const scrollHeader=()=>{
    const headeer=document.getElementById('header')
    this.scrollY>=50?Headers.classList.add('bg-header')
                    :Headers.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

const scrollHeader = () =>{
    const header =document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classlist.remove('bg-header')

    
    }
    
    window.addEventListener('scroll',scrollHeader)