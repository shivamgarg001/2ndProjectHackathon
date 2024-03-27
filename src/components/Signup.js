import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    const collectData=async()=>{
        console.warn(name,email,password);
        let result=await fetch('http://localhost:5000/register',{
            method:'POST',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });

        result=await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/');

    }
    return(
        <div className="div_signup">
            <h1 >Register</h1>
            <input className="inputbox" type="text" 
            value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>     
            <input className="inputbox" type="text"
            value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter EMAIL"/>
            <input className="inputbox" type="password" 
            value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Password"/>
            
            <button className="button" onClick={collectData}>SUBMIT</button>
        </div>
    )
}

export default SignUp;