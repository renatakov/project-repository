const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav__list');
const menu = document.querySelector('.menu');

let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
        navList.style.display = 'flex';
        menu.style.width = '500px';
        menu.style.background = 'rgba(206, 195, 181, 0.2)'
        menu.style.backdropFilter = 'blur(10px)';
        navList.style.marginLeft = '100px';
    }
    else {
        menuBtn.classList.remove('open');
        navList.style.display = 'none'
        menu.style.width = '0';
        menu.style.background = 'none'
        menu.style.backdropFilter = 'none';
        menuOpen=false;
    }
})