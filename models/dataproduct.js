const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})


const product = mongoose.model('products', ProductSchema);

module.exports = product;