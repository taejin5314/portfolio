'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark')
    }
})

// Change to the section which is selected
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    } else {
        scrollIntoView(event);
    }
})

// Click the contact button in Home section
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
    scrollIntoView(event);
})

// Home section fading
const home = document.querySelector('.home__container')
const homeSectionHeight = home.getBoundingClientRect().height;
console.log(homeSectionHeight)
document.addEventListener('scroll', () => {
    home.style.opacity = `${1 - window.scrollY / homeSectionHeight}`;
})

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeSectionHeight / 2) {
        arrowUp.classList.add('visible')
    } else {
        arrowUp.classList.remove('visible')
    }
})

// Click "arrow up" button
arrowUp.addEventListener('click', (event) => {
    scrollIntoView(event);
})

function scrollIntoView(selector) {
    const target = selector.target;
    const link = target.dataset.link;
    document.querySelector(link).scrollIntoView({ behavior: 'smooth' })
}