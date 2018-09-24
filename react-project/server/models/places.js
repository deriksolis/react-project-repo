let mongoose = require('mongoose');

let places = mongoose.model('rnProject', {
    productId: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    landscapeType: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    days: {
        type: String,
        required: true,
        trim: true
    },
    none: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports= {places}