import React, { useState } from "react";
import "./Navi2.css";
import Slog from '../login forms/Slog';
import Tlog from "../login forms/Tlog";

function Navi2() {
    const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
    const [showTeacherPopup, setShowTeacherPopup] = useState(false);
  
    const toggleTeacherPopup = () => {
      setShowTeacherPopup(!showTeacherPopup);
    };
  return (
    <div className='N-container'>
        <div className='N-main'>
            <div className='N-left'>
                <div className='N-home'>
                    Home
                </div>
                <div className='N-stu' onClick={togglePopup}>
                    Student
                </div>
                <div className='N-tea' onClick={toggleTeacherPopup}>
                    Teacher
                </div>
            </div>
            <div className='N-right'>
                <input type="text" />SEARCH
            </div>
        </div>
        {showPopup && <Slog togglePopup={togglePopup} />}
      {showTeacherPopup && <Tlog onClose={toggleTeacherPopup} />}
    </div>
  )
}
export default Navi2;

  
