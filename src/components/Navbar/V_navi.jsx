import React, { useState } from "react";
import "./V_navi.css";
import Slog from '../login forms/Slog';
import Tlog from "../login forms/Tlog";
import { Link } from 'react-router-dom';

function V_navi() {
  
  return (
    <div className='V-container'>
        <div className='V-icon'>InnoSphere</div>
        <div className='V-hold'>
        <div className='V-home'>Home</div>
        <div className='V-stu' ><Link to="/Forum/Forum2" style={{ textDecoration: 'none', color: 'inherit' }}>Forum</Link></div>
        <div className='V-stu' ><Link to="/Attendance/Attendance" style={{ textDecoration: 'none', color: 'inherit' }}>Attendance</Link></div>
        <div className='V-stu' ><Link to="/Statistics/Statistics" style={{ textDecoration: 'none', color: 'inherit' }}>Statistics</Link></div>
        <div className='V-stu' ><Link to="/Notes/NotesOpen" style={{ textDecoration: 'none', color: 'inherit' }}>Notes</Link></div>
        <div className='V-stu' ><Link to="/Achievement/achievement" style={{ textDecoration: 'none', color: 'inherit' }}>Achievements</Link></div>
        </div>
        
    </div>
  )
}
export default V_navi;

  
