import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
const Payment=()=>{
    const userString = localStorage.getItem("user"); 
    const userObject = JSON.parse(userString); 
    let name = userObject.name;
    let mainbill;
    let elecbill;
    let waterbill;
    // const email = userObject.email;
    // const apartment_no = userObject.apartment_no;
    // const phone_no = userObject.phone_no;
    const [bills, setBills] = useState({
        mainbill: 0,
        elecbill: 0,
        waterbill: 0
    });
    
    useEffect(() => {
        getBills();
    },[]);

    const getBills = async () => {
        let result = await fetch(`http://localhost:5000/payment/${name}`);
        result = await result.json();
        console.log(result);

        result.forEach(item => {
            if (item.billcategory === "maintenance") {
                setBills(prevState => ({ ...prevState, mainbill: item.billamount }));
            } else if (item.billcategory === "electricity") {
                setBills(prevState => ({ ...prevState, elecbill: item.billamount }));
            } else if (item.billcategory === "water") {
                setBills(prevState => ({ ...prevState, waterbill: item.billamount }));
            }
        });
    }

    const navigate=useNavigate()
    const handlePayment=async()=>{
        
        alert("PAID")
        setBills(prevState => ({ ...prevState, mainbill:0 }));
        navigate('/events')
    }

    return(
    <div>
    <section class="content">
        <h1>Payments and Dues</h1>
    </section>

    <div class="container">
        <div class="left-container">
            <h2>Dues</h2>
            <ul>
                <li><label><input type="checkbox" id="maintenance"/> Maintenance Bill ({bills.mainbill} INR)</label></li>
                <li><label><input type="checkbox" id="electricity"/> Electricity Bill ({bills.elecbill} INR)</label></li>
                <li><label><input type="checkbox" id="water"/> Water Bill ({bills.waterbill} INR)</label></li>
            </ul>
            <button id="payBtn" class="btn" onClick={handlePayment}>Pay Now</button>
        </div>
        <div class="right-container">
            <h2>Additional Amenities</h2>
            <ul>
                <li><label><input type="checkbox" id="gym"/> Gym Membership </label></li>
                <li><label><input type="checkbox" id="pool"/> Swimming Pool Access</label></li>
                <li><label><input type="checkbox" id="parking"/> Parking</label></li>
                <li><label><input type="checkbox" id="hall"/> Community Hall Booking</label></li>
            </ul>
            <h2>Select Payment Option</h2>
            <h3><label><input type="radio" name="payment" value="monthly" id="monthly"/> Monthly</label>
            <label><input type="radio" name="payment" value="yearly" id="yearly"/> Yearly</label></h3>
                    
            <button id="payBtn" class="btn" onClick={handlePayment}>Pay Now</button>
        </div>
    </div>
    </div>
)
}

export default Payment;