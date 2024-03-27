import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [brand,setBrand]=useState("");
    const [error,setError]=useState(false);

    const navigate=useNavigate();
    
    const addproduct=async()=>{

        if(!name || !price || !category || !brand){
            setError(true)
            return false;
        }

        const UserID=JSON.parse(localStorage.getItem('user'))._id;
        console.log(UserID);
        let result=await fetch('http://localhost:5000/add-products',{
            method:'POST',
            body:JSON.stringify({name,price,category,brand,UserID}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result);
        // alert("Product Added Successfully");
        navigate('/add-product')
    }

    return(
        <div>
            <h1>
                Add Products
                <input className="inputbox" type="text" placeholder="Enter Product Category"
                value={category} onChange={(e)=>setCategory(e.target.value)}></input>
                {error && !category && <span className="invalid_input"> Enter Valid Category</span>}

                <input className="inputbox" type="text" placeholder="Enter Product Brand"
                value={brand} onChange={(e)=>setBrand(e.target.value)}></input>
                {error && !brand && <span className="invalid_input"> Enter Valid Brand</span>}

                <input className="inputbox" type="text" placeholder="Enter Product Name"
                value={name} onChange={(e)=>setName(e.target.value)}></input>
                {error && !name && <span className="invalid_input"> Enter Valid Name</span>}

                <input className="inputbox" type="text" placeholder="Enter Product Price"
                value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                {error && !price && <span className="invalid_input"> Enter Valid Price</span>}


                <button className="button" onClick={addproduct}>SUBMIT</button>
            </h1>
        </div>
        
    )
}

export default AddProduct;