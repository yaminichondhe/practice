import React from "react";
import "./Statistics.css";
import Teacher_3 from "./CreateTop_t";
import Student_3 from "./CreateTop_s";
import Navi from "../Navbar/Navi";
import Foot from "../Footer/Foot";
import V_navi from "../Navbar/V_navi";
import Option from "./Option";
import S_opts from "./S_opts";

function Statistics() {
    function Createopt(option) {
        return (
          <Option
            key={option.id}
            id={option.id}
            option={option.option}
            Att_count={option.Att_count}
            />
        );
      }
  return (
    <>
    <V_navi />
    <div className="main-content">
    <div className="stat_container">
        <div className="graph-fea">
        <div className="graphs">
            
        </div>
        <div className="fea">
            <div className="divs4">
            {S_opts.map(Createopt)}

            </div>
            <div className="avg-att">
                <div className="stu-img">
                    image

                </div>
                <div className="att-count">
                    count

                </div>
            </div>
            </div>
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
    </div>
    </>
  );
}

export default Statistics;
