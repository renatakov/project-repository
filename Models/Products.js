const mongoose = require('mongoose')
const Schema = mongoose.Schema

const product = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    description: {
        type: String,
        required: true,
        minLength: 1
    },
    price: { 
        type: Number,
        required: true,
        minValue: 0
    },
    img:{ 
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Product', product)