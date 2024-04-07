import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone] = useState("");
    const [apartment_no, setApartment] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/events')
        }
    })

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, phone_no, apartment_no, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/events');

    }
    return (
        <div>
            <form id="signupForm" className="form-content" >
                <h2>Sign Up</h2>
                <div className="input-group">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="signupName" placeholder="Full Name" required />
                </div>
                <div className="input-group">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="signupEmail" placeholder="Email Address" required />
                </div>
                <div className="input-group">
                    <input value={phone_no} onChange={(e) => setPhone(e.target.value)} type="tel" id="signupPhone" placeholder="Phone Number" required pattern="[0-9]{10}" />
                </div>
                <div className="input-group">
                    <input value={apartment_no} onChange={(e) => setApartment(e.target.value)} type="text" id="signupApartmentNo" placeholder="Apartment Number" required />
                </div>
                <div className="input-group">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="signupPassword" placeholder="Create Password" required />
                </div>
                <button onClick={collectData} type="submit" className="btn">Sign Up</button>
                {/* <p className="form-toggle">Already have an account? <a href="http://localhost:3000/register" onClick={toggleForm}>Login</a></p> */}
            </form>
        </div>
    )
}

export default SignUp;
