const cartWrapper = document.querySelector('.cart_wrapper')
const iconCart = document.querySelector('.imgBuy')
const closeCart = document.querySelector('.back_to_order')
let flag = 1;

iconCart.addEventListener('click', (e) => {
    cartWrapper.style.display = 'block';
    if(flag === 1){
        flag = 0;
    }
})

closeCart.addEventListener('click', (e) => {
    cartWrapper.style.display = 'none';
    if(flag === 0){
        flag = 1;
      }
    });
    