const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    confirm_password:{
        type:String
    }

});

const register = mongoose.model('register',registerSchema);

module.exports = register;