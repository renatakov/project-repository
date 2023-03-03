const search = document.querySelector('.search');
const btnSearch = document.querySelector('#btnClose');
const headerSpan = document.querySelector('.header__span');
const navList1 = document.querySelector('.nav__list');
const inputSearch = document.querySelector('#inputSearch');

imgSearch.addEventListener('click', () => {
  console.log('click')
section1.style.background = 'black';
headerSpan.style.opacity = '0.2';
main.style.display = 'none';
imgBuy.style.display = 'none';
imgCall.style.display = 'none';
imgSearch.style.display = 'none';
search.style.display = 'flex';
navList1.style.opacity = '0.2'
});

btnSearch.addEventListener('click', () => {
  section1.style.background = `linear-gradient(90deg, rgba(31, 22, 18, 0.65) 40%, transparent 60%) no-repeat,
    url(${url}) 50% 100%`;
    section1.style.backgroundSize = 'cover';
    section1.style.backgroundRepeat = 'no-repeat';
    section1.style.backgroundBlendMode = 'color-burn';
headerSpan.style.opacity = '1';
main.style.display = 'flex';
imgBuy.style.display = 'block';
imgCall.style.display = 'block';
imgSearch.style.display = 'block';
search.style.display = 'none';
navList1.style.opacity = '1'
})

inputSearch.addEventListener('input', () =>{
})
// fetch('http://localhost:5000/api/getDishes')
// .then((res)=>{
//   res.json()
// })
// .then((data)=>{
// console.log(data)
// })
// .catch((error)=>{console.log(error)})


// axios.get("http://localhost:5000/api/getDishes")

// .then((res)=>{
//   console.log(res.data);
// })
// .catch((err)=>{
//   console.log(err);
// });