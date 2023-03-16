const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const BucketModel = mongoose.Schema({ 
    id: {
        type: String,
        required: true
    }, 
    products: [ 
        {
            name: {
                type: String,
            },
            price:{ 
                type: Number,
            }
        }
    ]
})

module.exports = mongoose.model('Bucket', BucketModel)