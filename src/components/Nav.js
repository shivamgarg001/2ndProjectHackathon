import React from "react";
import { Link,useNavigate } from "react-router-dom";
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/')
    }
    
    return(
        <div >
            {auth
                ? <ul className="nav-ul">
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/payment">Payments</Link></li>
                
                <li><Link to="/votetocand">Vote To Candidate</Link></li>
                <li><Link to="/voteascand">Register As Candidate</Link></li>
                <li><Link to="/ticket">Complaint</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li> <Link onClick={logout} to="/login">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>

                :
                <div>
                   
                
                
           
                 <ul className="nav-ul rightnav">
                    
                 <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/amenties">Amenities</Link></li>
                    <li><Link to="/rules">Rules</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link> </li>
                <li><Link to="/register">SignUp</Link></li>
                </ul></div>
            }
        </div>
    )
}

export default Nav