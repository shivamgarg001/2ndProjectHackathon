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
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
                <li> <Link onClick={logout} to="/login">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                : <ul className="nav-ul rightnav">
                <li><Link to="/login">Login</Link> </li>
                <li><Link to="/register">SignUp</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav