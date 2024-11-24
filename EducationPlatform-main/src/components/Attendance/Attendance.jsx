import React, { useState } from "react";
import "./Attendance.css";

function Attendance(){
    return(
    <div className="A_container">
        <div className="A_subcontainer">
            <div className="A_header">
                <h1>Mark your Attendance</h1>
            </div>
            <form>
                <input type="text" placeholder="Enter Name" required />
                <input type="text" placeholder="Enter Subject code" required />  
                <input type="text" placeholder="Enter OTP" required />
                <button type="submit">Submit</button>
            </form>
            <div className="status">
                Your attendace has been marked successfully!
            </div>
        </div>
    <div className="Attendance pic">
        image here
    </div>
  

</div>

    );
}
export default Attendance;
