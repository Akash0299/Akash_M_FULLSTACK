const express = require('express');
const cors=require('cors')
require('./db')

const app = express();
const port = 5000

const userModel = require('./schema/user');
const productModel = require('./schema/product');

app.use(express.json())
app.use(cors());

app.get("/user/:name",(req,res)=>{
    try{
    const {name} =req.params
    userModel.find({name}).then((data)=>{
        res.send(data);
    })
   }catch(error){
       res.status(500).json({message:"Internal server error",error:error.message});
   }
})

app.get("/product/:type",(req,res)=>{
    try{
    const {type} =req.params
    productModel.find({type}).then((data)=>{
        res.send(data);
    })
   }catch(error){
       res.status(500).json({message:"Internal server error",error:error.message});
   }
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
