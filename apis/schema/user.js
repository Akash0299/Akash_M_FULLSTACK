const {model,Schema} =require('mongoose');

const UserSchema = new Schema({
    name:String,
    email:String,
    phone:Number,
    city:String
})

const userModel = model("user",UserSchema,"user");

module.exports = userModel;