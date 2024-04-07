const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    complaint:String
});

module.exports=mongoose.model("tickets",productSchema);