import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/events')
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
            navigate('/events')
        }
        else{
            localStorage.clear()
            alert("Enter Correct Details")
        }
    }

    return(

        <div class="form-container" id="formContainer">
    <form id="loginForm" class="form-content">
        <h2>Login</h2>
        <div class="input-group">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="loginEmail" placeholder="Email Address" required/>
        </div>
        <div class="input-group">
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="loginPassword" placeholder="Password" required/>
        </div>
        <button onClick={checkData} type="submit" class="btn">Login</button>
        {/* <p class="form-toggle">Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a></p> */}
    </form></div>
    )
}

export default Login;