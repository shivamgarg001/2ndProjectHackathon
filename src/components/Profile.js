import React from "react";

const Profile=()=>{
    const userString = localStorage.getItem("user"); 
    const userObject = JSON.parse(userString); 
    const name = userObject.name;
    const email = userObject.email;
    const apartment_no = userObject.apartment_no;
    const phone_no = userObject.phone_no;
    const password=userObject.password;

    return(
        <div class="container">
        <div class="profile">
            <h1 class="profile-title">Profile</h1>
            <form id="profile-form" enctype="multipart/form-data">
                
                <div class="form-group">
                    <label for="name">Name</label>
                    <input placeholder={name}  type="text" id={name} name="name" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input placeholder={email} type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input placeholder={phone_no} type="tel" id="phone" name="phone" required/>
                </div>
                <div class="form-group">
                    <label for="house-no">House Number:</label>
                    <input placeholder={apartment_no} type="text" id="house-no" name="house-no" required/>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Profile;