const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    },
    email: {
        type: String,
        required: true,
        unique: false,
        trim: true
    }
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;