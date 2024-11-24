import React from "react";
import "./Statistics.css";
import Teacher_3 from "./CreateTop_t";
import Student_3 from "./CreateTop_s";
import Navi from "../Navbar/Navi";
import Foot from "../Footer/Foot";

function Statistics() {
  return (
    <>
    <Navi />
    <div className="stat_container">
        <div className="stat_head">
            Visualize your attendance
        </div>
        <div className="stats_subcontainer">
            
            <div className="Top_t">
            <div className="t_head">
                Top 3 Teachers
            </div>
                <Teacher_3/>
            </div>
            <div className="Top_s">
            <div className="t_head">
                Top 3 Students
            </div>
                <Student_3/>  
            </div>
        </div>

    </div>
    <Foot />
    </>
  );
}

export default Statistics;
