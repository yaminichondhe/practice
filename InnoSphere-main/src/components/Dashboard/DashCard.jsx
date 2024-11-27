import React from "react";
import { Link } from 'react-router-dom';
import "./StuDash";
import { useNavigate } from 'react-router-dom';

function DashCard(props) {
  
 
  return (
    <div className="dash-box" >
      <div className={`dash ${props.id}`}>
        <div className="dash-no">
            <h1>{props.No}</h1>

        </div>
        <div className="dash-name">
            <h2>{props.hd1}</h2>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default DashCard;
