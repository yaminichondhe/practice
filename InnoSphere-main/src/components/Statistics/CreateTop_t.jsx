import React from "react";
import TeacherInfo from "./TeacherInfo";
import PicName from "./PicName";
import "./Statistics.css";

function Teacher_3(){
    function Createtop_t(Teacher) {
        return (
          <PicName
            key={Teacher.id}
            id={Teacher.id}
            name={Teacher.name}
            
          />
        );
      }
    return(
        <div className="teacher-3">
            {TeacherInfo.map(Createtop_t)}
        </div>
          
          
        
    );
}
export default Teacher_3;