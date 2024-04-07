import React from "react";

const Events=()=>{
    return(<div>
        <section class="content">
        <h1>Gokuldham Co-Operative Housing Society</h1>
        <h2> UPCOMING EVENTS</h2>
    </section>
    
    <div class="container">

        <div class="box official">
            <a href="http://localhost:3000/official">Official</a>
        </div>
        <div class="box festive">
            <a href="http://localhost:3000/festive">Festive</a>
        </div>
        <div class="box functions">
            <a href="#">Functions</a>
        </div>
        <div class="box others">
            <a href="#">Others</a>
        </div>
    </div>
    </div>
    )
}

export default Events;