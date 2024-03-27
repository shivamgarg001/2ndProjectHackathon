import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct=()=>{
    const [name,setName]=React.useState("");
    const [price,setPrice]=React.useState("");
    const [category,setCategory]=React.useState("");
    const [brand,setBrand]=React.useState("");
    
    const params=useParams();
    const navigate=useNavigate()
    useEffect(()=>{
        getProductDetails();
    },[]);

    const getProductDetails= async()=>{
        console.warn(params);
        let result= await fetch(`http://localhost:5000/product/${params.id}`)
        result= await result.json()
        console.warn(result);

        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setBrand(result.brand)
    }
    const updateproduct=async()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"PUT",
            body:JSON.stringify({category,brand,name,price}),
            headers:{
                'Content-Type':'application/json'
            }
        });

        result=await result.json();
        console.warn(result);
        navigate('/products');
    }
    return(
        <div>
            <h1>
                Update Products
                <input className="inputbox" type="text" placeholder="Enter Product Category"
                value={category} onChange={(e)=>setCategory(e.target.value)}></input>
                
                <input className="inputbox" type="text" placeholder="Enter Product Brand"
                value={brand} onChange={(e)=>setBrand(e.target.value)}></input>

                <input className="inputbox" type="text" placeholder="Enter Product Name"
                value={name} onChange={(e)=>setName(e.target.value)}></input>

                <input className="inputbox" type="text" placeholder="Enter Product Price"
                value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                
                <button className="button" onClick={updateproduct}>SUBMIT</button>
            </h1>
        </div>
        
    )
}

export default UpdateProduct