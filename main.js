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

    if (document.querySelector('.navbar__menu').classList.length === 2) {
        document.querySelector('.navbar__menu').classList.remove('active')
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

// navbar toggle button
const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', (e) => {
    navbarMenu.classList.toggle('active')
})


// Click the contact button in Home section
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
    scrollIntoView(event);
})

// Home section fading
const home = document.querySelector('.home__container')
const homeSectionHeight = home.getBoundingClientRect().height;
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


// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    const active = document.querySelector('.category__button.active');
    active.classList.remove('active');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('active');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === '*' || project.dataset.type === '*' || project.dataset.type.includes(filter)) {
                project.classList.remove('invisible')
            } else {
                project.classList.add('invisible')
            }
        })
        projectContainer.classList.remove('anim-out');
    }, 300);
})

function scrollIntoView(selector) {
    const target = selector.target;
    const link = target.dataset.link;
    document.querySelector(link).scrollIntoView({ behavior: 'smooth' })
}