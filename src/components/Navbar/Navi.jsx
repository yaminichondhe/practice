import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slog from '../login forms/Slog';
import Tlog from "../login forms/Tlog";

function Navi() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
    const [showTeacherPopup, setShowTeacherPopup] = useState(false);
  
    const toggleTeacherPopup = () => {
      setShowTeacherPopup(!showTeacherPopup);
    };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">InnoSphere</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" onClick={togglePopup}>Student</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={toggleTeacherPopup}
                >
                  Teacher
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Generate OTP</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">See Attendance</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showPopup && <Slog togglePopup={togglePopup} />}
      {showTeacherPopup && <Tlog onClose={toggleTeacherPopup} />}
    </>
  );
}

export default Navi;
