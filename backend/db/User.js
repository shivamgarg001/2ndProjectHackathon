const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone_no:String,
    apartment_no:String,
    password:String
});

module.exports=mongoose.model("users",UserSchema);