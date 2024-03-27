import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        getProducts();
    },[]);

    const deleteData=async(id)=>{
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"DELETE"
        });
        result =await result.json()
        console.warn(result);
    }

    const searchproduct=async(event)=>{
        let key=event.target.value;
        console.log(key);
        if(key){
            let result=await fetch(`http://localhost:5000/search/${key}`)
            result=await result.json();
            if(result){
                setProducts(result);
            }
        }
        else{
            getProducts()
        }

    }

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    };

    console.warn("products", products);

    return (
        <div className="product-list">
            <h1>Products Are Listed Below:</h1>
            <input onChange={searchproduct}
             className="searchinputbox" type="text" placeholder="Search Anything..."></input>
            <ul>
                <li>S.No</li>
                <li>Category</li>
                <li>Brand</li>
                <li>Name</li>
                <li>Price</li>
                <li>Action</li>
            </ul>

            {products.length>0 ? products.map((item, index) => (
                <ul key={item._id}>
                    <li>{index + 1}</li>
                    <li>{item.category}</li>
                    <li>{item.brand}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li><button onClick={()=>deleteData(item._id)} className="button">DELETE</button>
                    <Link to={"/update-product/"+item._id}>Update</Link>
                    </li>
                </ul>
            ))
        : <h1>No Product Found</h1>}
        </div>
    );
};

export default Products;
