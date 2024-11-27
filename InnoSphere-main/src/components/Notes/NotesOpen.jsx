import React from "react";
import contacts from "./contacts";
import Classcard from "./Classcard";
import "./Notes.css";
import Navi from "../Navbar/Navi";
import Foot from "../Footer/Foot";
import Navi2 from "../Navbar/Navi2";
import V_navi from "../Navbar/V_navi";
import CreateClass from "./CreateClass";


function NotesOpen(){
      
    return(
      <>
      
      <V_navi />
      <div className="main-content">
        <header className="header">
          <h1>My Notes</h1>
          <div className="filters">
            <span>Filter by:</span>
            <select>
              <option>Time</option>
              <option>Level</option>
              <option>Language</option>
              <option>Type</option>
            </select>
          </div>
        </header>
        <div className="notes-start">
          <CreateClass />
        </div>
        </div>
      </>
    );
}
export default NotesOpen;