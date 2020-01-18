const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        activeAddProduct: true
    })
}

exports.postAddProduct = (req, res, next) => {
    const name = req.body.prodName
    const image = req.body.imgURL
    const desc = req.body.prodDesc
    const price = req.body.prodPrice
    const product = new Product(name, image, desc, price)
    product.save();
    res.redirect('/products')
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render('shop/products', {
            pageTitle: 'Products',
            products, 
            hasProducts: products.length > 0,
        })
    });    
}