let btnMenu =document.getElementById('btn-menu');
let menu = document.getElementById('mobile-menu');
let overlay = document.getElementById('menu-overlay');

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu');
});