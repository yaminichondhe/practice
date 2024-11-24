import React from "react";
import StudentInfo from "./StudentInfo";
import PicName from "./PicName";
import "./Statistics.css";

function Student_3(){
    function Createtop_s(Student) {
        return (
          <PicName
            key={Student.id}
            id={Student.id}
            name={Student.name}
          />
        );
      }
    return(
        <div className="teacher-3">
            {StudentInfo.map(Createtop_s)}
        </div>
          
          
        
    );
}
export default Student_3;