import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Navi() {   // Accept toggleTools as a prop
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"> 

      <div className="container-fluid">
        <a className="navbar-brand" href="#">InnoSphere</a>
        
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              
              <Link to="/Home/Home"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
              
            </li>
            <li className="nav-item">
              <Link to="/login forms/Slog"><a className="nav-link" href="./login forms/Tlog.css">Student</a></Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Teacher
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/login forms/Tlog"><a className="dropdown-item" href="#">Login</a></Link></li>
                <li><a className="dropdown-item" href="#">Generate OTP</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">See Attendance</a></li>
              </ul>
            </li>
            
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Navi;
