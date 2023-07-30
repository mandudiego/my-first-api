const mongoose = require('mongoose')

const { Schema } = mongoose;

const User = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
    }, 
    { timestamps: true } // -> Salva data de criação e atualização do registro
)

module.exports = mongoose.model("User", User)
