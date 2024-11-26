import React, { useState } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import CreateTool from "./CreateTool";
import Clgreg from "../login forms/Clgreg";

function Forum() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="forum-feature-container">
        <div className="features">
          <div className="feature-info">
            <h1>Explore Features</h1>
            <p className="disc">Welcome, Explore Your Gateway to Smarter Learning and Seamless Collaboration!</p>
            <p>Start With the college registrations here!</p>
            {/* Button to open the Clgreg popup */}
            <button type="button" className="btn-primary" onClick={togglePopup}>
              Explore
            </button>
          </div>
        </div>

        <div className="reg-tool" />
        <div className="forum-tool" />
      </div>

      <div className="reg-forum-name">
        <div className="reg-name">Student Account</div>
        <div className="forum-name">Forum</div>
      </div>

      <CreateTool />

      {/* Conditionally render Clgreg popup */}
      {isPopupOpen && <Clgreg togglePopup={togglePopup} />}
    </>
  );
}

export default Forum;
