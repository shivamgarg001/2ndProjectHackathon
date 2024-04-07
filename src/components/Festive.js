import React from "react";
import { useNavigate } from "react-router-dom";

const Festive=()=>{
    const navigate=useNavigate();
    const handlepdf=(e)=>{
        <img src="pdf-icon.png" alt="PDF Icon"></img>
    }
    return(
        <div>
            <div class="container">
        <h1>Festive Events</h1>
        <ul class="event-list">
            <li>
                <span class="event-date">May 20, 2024</span><br></br>
                <span class="event-name">Plantation Drive</span>
                <span onClick={handlepdf} class="pdf-icon"></span>
            </li>
            <li>
                <span class="event-date">July 1, 2024</span><br></br>
                <span class="event-name">Independence Day Celebration</span>
                <span onClick={handlepdf} class="pdf-icon"></span>
            </li>
            <li>
                <span class="event-date">August 8, 2024</span><br></br>
                <span class="event-name">Cultural Festival</span>
                <span onClick={handlepdf} class="pdf-icon"></span>
            </li>
            <li>
                <span class="event-date">August 25, 2024</span><br></br>
                <span class="event-name">Sports Festival</span>
                <span onClick={handlepdf} class="pdf-icon"></span>
            </li>
            <li>
                <span class="event-date">November 14, 2024</span><br></br>
                <span class="event-name">Children's Day</span>
                <span onClick={handlepdf} class="pdf-icon"></span>
            </li>
            <li>
                <span class="event-date">November 18, 2024</span><br></br>
                <span class="event-name">Diwali</span>
                <span onClick={handlepdf} class="pdf-icon"></span>
            </li>
        </ul>
    </div>
        </div>
    )
}

export default Festive