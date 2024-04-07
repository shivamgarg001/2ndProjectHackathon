const express=require('express');
require("./db/config")
const cors=require("cors")

const User=require("./db/User");
const ticket=require("./db/ticket")
const voting=require("./db/votings")
const bill=require("./db/bills")
// const Jwt=require("jsonwebtoken")
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

// app.post("/add-products",async(req,resp)=>{
//     let product=new products(req.body);
//     let result=await product.save();
//     resp.send(result);
// })

// app.get("/products",async(req,resp)=>{
//     let product=await products.find();
//     if(products.length>0){
//         resp.send(product)
//     }
//     else{
//         resp.send({result:"No Data Found"})
//     }
// })

// app.delete("/product/:id",async(req,resp)=>{
//     const result=await products.deleteOne({_id:req.params.id})
//     resp.send(result)
// })

// app.get("/product/:id",async(req,resp)=>{
//     const result=await products.findOne({_id:req.params.id})
//     resp.send(result)
// })

// app.put("/product/:id",async(req,resp)=>{
//     let result=await products.updateOne(
//         {_id:req.params.id},{$set:req.body}
//     )
//     resp.send(result);
// })

// app.get("/search/:key",async(req,resp)=>{
//     let result=await products.find(
//     { "$or":[
//             {category:{$regex:req.params.key}}, 
//             {brand:{$regex:req.params.key}},
//             {name:{$regex:req.params.key}},
//             {price:{$regex:req.params.key}}
//         ]
//     })
//     resp.send(result)
// })
app.post('/ticket',async(req,resp)=>{
    let tick=new ticket(req.body);
    let result=await tick.save();
    resp.send(result);
})

app.get('/ticket/:name',async(req,resp)=>{
    let tick=await ticket.find({name:req.params.name});
    if(tick.length>0){
        resp.send(tick)
    }   
    else{
        resp.send({result:"No Data Found"})
    }
})

app.post('/voteascand',async(req,resp)=>{
    let vote=new voting(req.body)
    let result=await vote.save();
    resp.send(result);
})

app.get('/votetocand',async(req,resp)=>{
    let vote=await voting.find();
    if(vote.length>0){
        resp.send(vote)
    }   
    else{
        resp.send({result:"No Data Found"})
    }
})
app.post('/payment',async(req,resp)=>{
    let pay=new bill(req.body)
    let result=await pay.save()
    resp.send(result);
})
app.get('/payment/:name',async(req,resp)=>{
    const result=await bill.find({name:req.params.name})
    if(result)  resp.send(result)
    else    resp.send({result:"no data found"})
})
app.put('/payment',async(req,resp)=>{

})
app.listen(5000);