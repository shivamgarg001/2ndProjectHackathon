const express=require('express');
require("./db/config")
const cors=require("cors")
const products=require("./db/products")
const User=require("./db/User");

const Jwt=require("jsonwebtoken")
const app=express();


app.use(express.json());
app.use(cors());

app.post("/register",async(req,resp)=>{
    let user=new User(req.body);
    let result=await user.save()
    result=result.toObject();
    delete result.password;
    resp.send(result)
})

app.post("/login",async(req,resp)=>{
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password");
        if(user)    resp.send(user);
        else    resp.send({user:"Please Sign-Up"})
    }
    else{    
        resp.send({user:"E-mail/Password wrong"})
    }
})

app.post("/add-products",async(req,resp)=>{
    let product=new products(req.body);
    let result=await product.save();
    resp.send(result);
})

app.get("/products",async(req,resp)=>{
    let product=await products.find();
    if(products.length>0){
        resp.send(product)
    }
    else{
        resp.send({result:"No Data Found"})
    }
})

app.delete("/product/:id",async(req,resp)=>{
    const result=await products.deleteOne({_id:req.params.id})
    resp.send(result)
})

app.get("/product/:id",async(req,resp)=>{
    const result=await products.findOne({_id:req.params.id})
    resp.send(result)
})

app.put("/product/:id",async(req,resp)=>{
    let result=await products.updateOne(
        {_id:req.params.id},{$set:req.body}
    )
    resp.send(result);
})

app.get("/search/:key",async(req,resp)=>{
    let result=await products.find(
    { "$or":[
            {category:{$regex:req.params.key}}, 
            {brand:{$regex:req.params.key}},
            {name:{$regex:req.params.key}},
            {price:{$regex:req.params.key}}
        ]
    })
    resp.send(result)
})


app.listen(5000);