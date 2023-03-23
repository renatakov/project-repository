const search = document.querySelector(".search");
const btnSearch = document.querySelector("#btnClose");
const headerSpan = document.querySelector(".header__span");
const navList1 = document.querySelector(".nav__list");
const inputSearch = document.querySelector("#inputSearch");
const menu1 = document.querySelector("menu-btn");
let productsList = document.querySelector('#productsList')
let bucketList = document.querySelector('.product_wrapper')
//let btnsOpen = document.querySelectorAll('.product_smt_btn')

imgSearch.addEventListener("click", () => {
  console.log("click");
  section1.style.background = "black";
  headerSpan.style.opacity = "0.2";
  main.style.display = "none";
  menuBtn.style.display = "none";
  productsList.style.display = "flex";
  imgBuy.style.display = "none";
  imgCall.style.display = "none";
  imgSearch.style.display = "none";
  search.style.display = "flex";
  navList1.style.opacity = "0.2";
});

btnSearch.addEventListener("click", () => {
  section1.style.background = `linear-gradient(90deg, rgba(31, 22, 18, 0.65) 40%, transparent 60%) no-repeat,
    url(${url}) 50% 100%`;
  section1.style.backgroundSize = "cover";
  section1.style.backgroundRepeat = "no-repeat";
  section1.style.backgroundBlendMode = "color-burn";
  headerSpan.style.opacity = "1";
  main.style.display = "flex";
  imgBuy.style.display = "block";
  imgCall.style.display = "block";
  imgSearch.style.display = "block";
  search.style.display = "none";
  menuBtn.style.display = "flex";
  productsList.style.display = "none";
  navList1.style.opacity = "1";
});




let generateProducts = (listProducts) => { 
    productsList.innerHTML = ""
    listProducts.forEach((product, index) => {
        productsList.innerHTML += `
            <div id="product-${index}" class="product">
                <img src="http://localhost:5000/img/${product.img}">
                <p id="name-${index}">${product.name}</p>
                <p>${product.description}</p>
                <p id="price-${index}">₴ ${product.price}</p>
                <button id="btn123">замовити</button>
            </div>
        `
    });

}

let getProductsList = () => { 
    axios.get('http://localhost:5000/api/getDishes')    
        .then(res => {
            generateProducts(res.data)
        })
}
getProductsList()

inputSearch.addEventListener('input',()=>{
  if(inputSearch.value.length == 0){
      getProductsList()
  } else {
      axios.get(`http://localhost:5000/api/search?text=${inputSearch.value}`)
      .then(res => {
          generateProducts(res.data)
      })
  }
})

// cart.js
let userId = localStorage.getItem('userId')

if (!userId){
    axios.get('http://localhost:5000/bucket/create')
        .then((res)=>{
            localStorage.setItem('userId',res.data.id)
            userId = localStorage.getItem('userId')
        })
} else {
    console.log(userId)
}

let openBucket = () => {
    axios.get(`http://localhost:5000/bucket/get-products?id=${userId}`)
        .then((res) => {
            bucketList.innerHTML = ""
            let sum = 0
            res.data.forEach((product)=> { 
                sum += product.price
                bucketList.innerHTML += `
                <div class="bucketItem">
                    <p>${product.name} - <span>₴${product.price}</span></p>
                    <button id="btnDelete">видалити</button>
                </div>
                `
            })
            document.querySelector('.price_wrap').innerText = `₴ ${sum}`
            let listBucketItems = document.querySelectorAll('.bucketItem')
            console.log(listBucketItems)
            listBucketItems.forEach((item,index) => {
                item.addEventListener('click',(event) => {
                    if (event.target.id == 'btnDelete'){
                        axios.post(`http://localhost:5000/bucket/delete-product`,{
                            id: userId,
                            name: res.data[index].name
                        })
                            .then((res)=> {
                                openBucket()
                            })
                    }
                })
            })
        })
}

let addProduct = (product) => {
    axios.post('http://localhost:5000/bucket/add-product',{
        id: userId,
        name: product.name,
        price: product.price
    })
        .then (res => {
            openBucket()
        })
}

//btnOpen.addEventListener('click', openBucket)
/*btnsOpen.forEach((btn,index)=> {
    btn.addEventListener('click',openBucket)
})*/

imgBuy.addEventListener("click", openBucket)

let cards = document.querySelectorAll('.card')
cards.forEach((card) => {
    card.addEventListener('click', (e) => { 
        if(e.target.classList.value == 'product_smt_btn'){
            let title = card.childNodes[3].innerText
            let price = card.childNodes[7].childNodes[1].innerText
            price = price.substring(2)
            addProduct(
                {
                    name: title,
                    price
                }
            )
        }
    })
})