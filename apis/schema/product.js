const {model,Schema} = require('mongoose')

const productSchema = new Schema({
    source:String,
    alt:String,
    style:String,
    heading:String,
    type:String
})

const productModel = model("product",productSchema,"product");

module.exports = productModel;