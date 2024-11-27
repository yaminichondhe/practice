import React, { useState } from "react";
import "./V_navi.css";
import Slog from '../login forms/Slog';
import Tlog from "../login forms/Tlog";

function V_navi() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
    const [showTeacherPopup, setShowTeacherPopup] = useState(false);
  
    const toggleTeacherPopup = () => {
      setShowTeacherPopup(!showTeacherPopup);
    };
  return (
    <div className='V-container'>
        <div className='V-icon'>InnoSphere</div>
        <div className='V-hold'>
        <div className='V-home'>Home</div>
        <div className='V-stu' onClick={togglePopup}>Student</div>
        <div className='V-tea' onClick={toggleTeacherPopup}>Teacher</div>
        </div>
        {showPopup && <Slog togglePopup={togglePopup} />}
      {showTeacherPopup && <Tlog onClose={toggleTeacherPopup} />}
    </div>
  )
}
export default V_navi;

  
