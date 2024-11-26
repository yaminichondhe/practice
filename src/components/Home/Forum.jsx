import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import CreateTool from "./CreateTool";

function Forum(){
    return(
        <>
        
        <div className="forum-feature-container">
        <div className='features'>
        <div className="feature-info">
            <h1>Explore Features</h1>
            <p className='disc'>Welcome, Explore Your Gateway to Smarter Learning and Seamless Collaboration! </p>
            <p>Start With the college registrations  here!</p>
            <Link to="/Forum/Forum2"><button type="button" class="btn-primary">Explore</button></Link>
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
        
        </>
           );
}
export default Forum;