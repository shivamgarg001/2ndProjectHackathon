const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone_no:String,
    apartment_no:String,
    billcategory:String,
    billamount:String
});

module.exports=mongoose.model("bills",productSchema);