const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
       // required: true
    },
    userName: {
        type: String,
      //  required: true,
    },
    email: {
        type: String,
    },
    adress: {
        type: String
    },
    phone: {
        type: String,
        minLength: 9,
        maxLength: 10
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)