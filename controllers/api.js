const ProductModel = require('../Models/Products')

module.exports.CreateProduct = async (req,res) => { 
    const newProduct = new ProductModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img
    })
    await newProduct.save()
        .then(() => { 
            res.status(200).json({
                message: `New product created successfully`,
                productID: newProduct.id
            })
        })
        .catch(err => { 
            res.status(500).json({
                message: err.message
            })
        })
}

module.exports.GetListProducts = async (req,res) => { 
    const products = await ProductModel.find()
    if (products) { 
        res.status(200).json({
            list: products
        })
    } else { 
        res.status(404).json({
            message: 'Products not found'
        })
    }
}

module.exports.GetProductById = async (req,res) => {
    const product = await ProductModel.findById(req.query.productId)
    if (product) {
        res.status(200).json(product)
    } else { 
        res.status(404).json('Product not found')
    }
}