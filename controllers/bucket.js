const randomstring = require('randomstring')
const BucketModel = require('../Models/Bucket')

module.exports.CreateUser = async (req,res) => {
    let newUser = new BucketModel({
        id: randomstring.generate(10),
        products: []
    })
    await newUser.save()
        .then(() =>{ 
            res.status(200).json({
                message: "User created successfully",
                id: newUser.id
            })
        })
        .catch(err => res.status(500).json(err))
}

module.exports.AddProduct = async (req,res) => {
    let findUser = await BucketModel.findOne(
        {
            id: req.body.id
        }
    )
    if (!findUser){
        res.status(404).json({message: "User not found"})
    } else { 
        findUser.products.push({
            name: req.body.name,
            price: req.body.price
        })
        findUser.save() 
            .then(() => res.status(200).json('New product add'))
            .catch(err => res.status(500).json(err))
    }
}

module.exports.DeleteProduct = async (req,res) => {
        let findUser = await BucketModel.findOne(
            {
                id: req.body.id
            }
        )
        if (!findUser){
            res.status(404).json({message: "User not found"})
        } else { 
            let newProducts = []
            findUser.products.forEach(element => {
                if( element.name !== req.body.name){
                    newProducts.push(element)
                }
            })
            findUser.products = [...newProducts]
            findUser.save() 
                .then(() => res.status(200).json('New product add'))
                .catch(err => res.status(500).json(err))
        }
}

module.exports.GetProducts = async (req,res) => {
    let findUser = await BucketModel.findOne(
        {
        id: req.query.id
        },
        {
            products:1
        }
    )
    if (findUser){ 
        res.status(200).json(findUser.products)
    } else { 
        res.status(404).json('User not found')
    }
}