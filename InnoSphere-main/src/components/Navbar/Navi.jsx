import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slog from '../login forms/Slog';
import Tlog from "../login forms/Tlog";
import img9 from './images/bagpack_17618299.png';
import img12 from './images/298794_home_icon.png';
import img10 from './images/111104_user_business_man_icon.png';

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
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
        <div className="container-fluid custom-shadow">
          <a className="navbar-brand" href="#">
            EPIC
          </a>
          <a id="aa" >
            <img src={img9} width="66%" alt="Tools" />
          </a>
          <a id="aac">
            <img src={img12} width="70%" alt="Home Icon" />
          </a>
          <a id="aab">
            <img
              src={img10}
              width="70%"
              alt="User Icon"
              
            />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={togglePopup}>
                  Student
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  onClick={toggleTeacherPopup}
                >
                  Teacher
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {showPopup && <Slog togglePopup={togglePopup} />}
      {showTeacherPopup && <Tlog onClose={toggleTeacherPopup} />}
    </>
  );
}

export default Navi;
