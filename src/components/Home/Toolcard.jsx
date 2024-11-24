import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

function Toolcard(props) {
  const navigate = useNavigate();  // Initialize useNavigate

  // Handle navigation on div click
  const handleNavigation = () => {
    navigate(props.path);  // Navigate to the specified path
  };
  return (
    <div className="tool-box" onClick={handleNavigation}>
      <div className={`stats ${props.id}`}>
        
        <div className="ToolName">
        {props.name}
          {/* <Link to={props.path}>
            <button>{props.name}</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Toolcard;
