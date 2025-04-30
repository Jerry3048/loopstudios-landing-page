const hamMenu = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.nav-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('.active');
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    const body = document.querySelector('body');
    body.classList.toggle('active');
})