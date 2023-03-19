// // const mongoose = require('mongoose');
// const Bucket = require('../Models/Bucket'); 


// const cart = {
//     products: []
//   };

  
//   function addProductToCart(productId, productName, productPrice) {
//     const existingProductIndex = cart.products.findIndex(product => product.id === productId);
//     if (existingProductIndex !== -1) {
//       cart.products[existingProductIndex].quantity++;
//     } else {
//       cart.products.push({
//         id: productId,
//         name: productName,
//         price: productPrice,
//         quantity: 1
//       });
//     }
//   }
  
//   function removeProductFromCart(productId) {
//     const productIndex = cart.products.findIndex(product => product.id === productId);
//     if (productIndex !== -1) {
//       cart.products.splice(productIndex, 1);
//     }
//   }

  
//   addProductToCart('123', 'Product A', 9.99);


//   removeProductFromCart('123');


//   const bucket = new Bucket({
//     products: cart.products.map(product => ({
//       name: product.name,
//       price: product.price
//     }))
//   });
//   bucket.save();
  
