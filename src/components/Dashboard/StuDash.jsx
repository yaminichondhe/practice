import React from "react";
import { Link } from 'react-router-dom';
import "./StuDash.css";
import { useNavigate } from 'react-router-dom';
import V_navi from "../Navbar/V_navi";
import DashCard from "./DashCard";

function StuDash() {
  
  return (
    <div className="dash-container">
        <V_navi />
        <div className="main-content">
        <div className="dash-header">
            <h1>Student Dashboard</h1>
            <div className="log-out">
                log out
            </div>
        </div>
        <div className="dash-body">
            <div className="dash-card">
                <DashCard /> 
            </div>
            

        </div>

    </div>
    </div>
  );
}

export default StuDash;
