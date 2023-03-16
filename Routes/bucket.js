const express = require('express')
const router = express.Router()

const controller = require('../controllers/bucket')

router.get('/create', controller.CreateUser)
router.get('/get-products', controller.GetProducts)

router.post('/add-product', controller.AddProduct)
router.post('/delete-product', controller.DeleteProduct)

module.exports = router