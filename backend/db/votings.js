const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone_no:String,
    apartment_no:String,
    pitch:String,
    votedcandidate:String
});

module.exports=mongoose.model("votings",productSchema);