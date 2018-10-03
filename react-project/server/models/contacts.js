let mongoose = require('mongoose');

let contacts = mongoose.model('rnProject-contact', {
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    work: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});

module.exports= {contacts}