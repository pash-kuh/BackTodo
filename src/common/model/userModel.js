const {Schema, model} = require('mongoose');


// unique: уникальность, required: обязательный
const UserSchema = new Schema({
   email: {type: String, unique: true, required: true},
   password: {type: String, required: true},
   isActivated: {type: Boolean, default: false},
   activationLink: {type: String, unique: true, required: true},
});


exports.module = model('User', UserSchema)