const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userType: { type: String, required: true },
    password: { type: String, required: true },
    birthDate: {type: Date},
    address: {type: String, required: true},
    mobileNo: {type: String, required: true},
    pregnancyDate: {type: Date},
    isVerified: { type: String },
    portfolio: {type: String}
},{
    timestamps:true
});

const User = mongoose.model('user', UserSchema);
module.exports = User;