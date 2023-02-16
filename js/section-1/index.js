const modalWindowBlock = document.querySelector('.section-1__modalWindow');
const modalWindowClose = document.querySelector('.section-1__modalWindow__close');
const imgCall = document.querySelector('.imgCall');
const imgSearch = document.querySelector('.imgSearch');
const imgBuy = document.querySelector('.imgBuy');
const header = document.querySelector('.section-1__header');
const main = document.querySelector('.section-1__main');
const section1 = document.querySelector('.section-1');
let url = '/img/section-1/photo-1497515114629-f71d768fd07c.png'
let flag = 1;

// icon call
imgCall.addEventListener('click', (e) => {
  modalWindowBlock.style.display = 'flex';
  if(flag === 1){
    flag = 0;
    section1.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    main.style.opacity = '0.2';
    header.style.opacity = '0.2';

  }
})

modalWindowClose.addEventListener('click', (e) => {
  modalWindowBlock.style.display = 'none';
  if(flag === 0){
    flag = 1;
    main.style.opacity = '1';
    header.style.opacity = '1';
    section1.style.background = `linear-gradient(90deg, rgba(31, 22, 18, 0.65) 40%, transparent 60%) no-repeat,
    url(${url}) 50% 100%`;
    section1.style.backgroundSize = 'cover';
    section1.style.backgroundRepeat = 'no-repeat';
    section1.style.backgroundBlendMode = 'color-burn';
  }
});

// icon search