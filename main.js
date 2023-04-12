const navMenu = document.getElementById('nav-menu');  
const toggleMenu = document.getElementById('toggle-menu');  
const closeMenu = document.getElementById('close-menu'); 

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('menu__show');
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('menu__show');
})