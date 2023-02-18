const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
const menu = document.querySelector('.menu');
const listLi = document.querySelector('.list__li');
const imgCall1 = document.querySelector('.imgCall');
const imgSearch1 = document.querySelector('.imgSearch');
const imgBuy1 = document.querySelector('.imgBuy');
const menuNav = document.querySelector('.menu-nav');

const btnClose = document.querySelector('#close');


let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
    document.querySelector('.nav-m').style.zIndex = '1';
})

btnClose.addEventListener('click', ()=> {
    document.querySelector('.nav-m').style.zIndex = '-1';
})