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

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
    scrollIntoView(event);
})

function scrollIntoView(selector) {
    const target = selector.target;
    const link = target.dataset.link;
    document.querySelector(link).scrollIntoView({ behavior: 'smooth' })
}