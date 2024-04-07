import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Ticket=()=>{
    const username=localStorage.getItem('name');
    const [complaint,setComplaint]=useState("");

    const navigate=useNavigate();
    const handlecomplaint=async()=>{
        let result=await fetch('http://localhost:5000/ticket',{
            method:'POST',
            body:JSON.stringify({username,complaint}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.log(result);
        alert("ticket is raised")
        navigate('/events')
        
    }
    return(
        <div>
            <h1>Raise your Tickets here</h1>
            <textarea className="inputbox" type="text" placeholder="Enter your Grievance here"
            value={complaint} onChange={(e)=>setComplaint(e.target.value)}/>
            <button onClick={handlecomplaint} className="button">SUBMIT</button>

        </div>
    )
}

export default Ticket;