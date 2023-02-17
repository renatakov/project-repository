const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
const menu = document.querySelector('.menu');
const listLi = document.querySelector('.list__li');
const imgCall1 = document.querySelector('.imgCall');
const imgSearch1 = document.querySelector('.imgSearch');
const imgBuy1 = document.querySelector('.imgBuy');

let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
        navList.style.display = 'flex';
        menu.style.width = '500px';
        imgBuy1.style.display = 'none';
        imgCall1.style.display = 'none';
        imgSearch1.style.display = 'none';
        menuBtn.style.marginTop = '30px';
        menu.style.paddingLeft = '20px';
        menu.style.background = 'rgba(206, 195, 181, 0.2)'
        menu.style.backdropFilter = 'blur(10px)';
    }
    else {
        menuBtn.classList.remove('open');
        navList.style.display = 'none'
        menu.style.width = '0';
        menu.style.background = 'none'
        menu.style.backdropFilter = 'none';
        menuBtn.style.marginTop = '0';
        menu.style.paddingLeft = '0';
        imgBuy1.style.display = 'block';
        imgCall1.style.display = 'block';
        imgSearch1.style.display = 'block';
        menuOpen=false;
    }
})