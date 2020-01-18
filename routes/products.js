const express = require('express')

const router = express.Router()

//Products controller
const productsController = require('../controllers/products')

router.get('/products', productsController.getProducts)

router.get('/add-product', productsController.getAddProduct)

router.post('/add-product', productsController.postAddProduct)

module.exports = router