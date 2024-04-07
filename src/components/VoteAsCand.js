import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Voteascand=()=>{
    const userString = localStorage.getItem("user"); 
    const userObject = JSON.parse(userString); 
    const name = userObject.name;
    const email = userObject.email;
    const apartment_no = userObject.apartment_no;
    const phone_no = userObject.phone_no;
    

    const navigate=useNavigate();
    const [pitch,setPitch]=useState("");


    const handleregister=async()=>{
        const votedcandidate = userObject.name;
        
        let result=await fetch('http://localhost:5000/voteascand',{
        method:'POST',
        body:JSON.stringify({name,email,phone_no,apartment_no,votedcandidate,pitch}),
        headers:{
            'Content-Type':'application/json'
        }
        });
        console.log(result);
        alert("You are Registered as a Candidate");
        navigate('/events')
    }
    return(
        <div>
        <div>
            <h1 className="tag">Hello, {name} </h1>
        </div>
            {/* REGISTER AS A CANDIDATE */}
            <div className="box">
                <h2>
                    <br></br>
                    <h1>Register as a Candidate:</h1>
                    <textarea className="inputboxpitch" type="text" placeholder="Enter your Pitch here"
                        value={pitch} onChange={(e)=>setPitch(e.target.value)}/>
                    <button onClick={handleregister} className="button">SUBMIT</button>
                </h2>   
            </div>
        </div>

    )
}

export default Voteascand;