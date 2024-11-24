import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

function Toolcard(props) {
  return (
    <div className="tool-box">
      <div className={`stats ${props.id}`}>
        <div className="ToolName">
          
          <Link to={props.path}><button>{props.name}</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Toolcard;
