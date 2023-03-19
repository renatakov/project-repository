

// let inputSearch = document.querySelector('#inputSearch')
// let btnSearch = document.querySelector('#btnSearch')
// let productsList = document.querySelector('#productsList')

// let generateProducts = (listProducts) => { 
//     productsList.innerHTML = ""
//     let btns = []

//     listProducts.forEach((product, index) => {
//         productsList.innerHTML += `
//             <div id="product-${index}" class="product">
//                 <img src="http://localhost:5000/img/${product.img}">
//                 <p id="name-${index}">${product.name}</p>
//                 <p>${product.description}</p>
//                 <p id="price-${index}">${product.price}</p>
//                 <button id="btn">Add to bucket</button>
//             </div>
//         `
//     });
//     let listProduct = document.querySelectorAll('.product')
//     listProduct.forEach((block, index) => {
//         block.addEventListener('click',(event) => {
//             if (event.target.id == `btn`) {
//                 addProduct({
//                     name: document.querySelector(`#name-${index}`).innerText,
//                     price: document.querySelector(`#price-${index}`).innerText
//                 })
//             }
//         })
//     })
// }

// let getProductsList = () => { 
//     axios.get('http://localhost:5000/api/getDishes')    
//         .then(res => {
//             generateProducts(res.data)
//         })
// }
// getProductsList()


// inputSearch.addEventListener('input',()=>{
//     if(inputSearch.value.length == 0){
//         getProductsList()
//     } else {
//         axios.get(`http://localhost:5000/api/search?text=${inputSearch.value}`)
//         .then(res => {
//             generateProducts(res.data)
//         })
//     }
// })

