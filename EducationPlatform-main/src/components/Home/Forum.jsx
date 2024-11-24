import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

function Forum(){
    return(
        <div className='forums'>
        <div className="forum-info">
            <h1>Explore Forums</h1>
            <p className='disc'>Welcome, Explore Your Gateway to Smarter Learning and Seamless Collaboration! </p>
            <Link to="/Forum/ForumSec"><button type="button" class="btn-primary">Explore</button></Link>
        </div>
        </div>
           );
}
export default Forum;