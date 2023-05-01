const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    userType: { type: String, required: true },
    googleUser: { type: Boolean, required: false },
    password: { type: String, required: true },
    birthday: {type: Date, required: true},
    address: {type: String, required: true},
    mobileNo: {type: String, required: true},
    dateofPregnancy: {type: Date, required: true},
},{
    timestamps:true
});

const User = mongoose.model('user', UserSchema);
module.exports = User;