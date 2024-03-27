import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
    const checkData=async()=>{
        console.warn(email,password);
        let result=await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });

        result=await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result.name){
            navigate('/')
        }
        else{
            localStorage.clear()
            alert("Enter Correct Details")
        }
    }

    return(
        <div className="div_signup">
            <h1 >Login</h1>
            <input className="inputbox" type="text"
            value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter EMAIL"/>
            <input className="inputbox" type="password" 
            value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Password"/>
            <button className="button" onClick={checkData}>SUBMIT</button>
        </div>
    )
}

export default Login;