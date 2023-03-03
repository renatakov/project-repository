const express = require('express')
const router = express.Router()
const controller = require('../controllers/api')

router.post('/create', controller.CreateProduct)

router.get('/getDishes', controller.GetListProducts)
router.get('/getById', controller.GetProductById)

module.exports = router