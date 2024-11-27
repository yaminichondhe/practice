import React from "react";
import "./Statistics.css";

function PicName(props) {
  return (
    <div className="pic-name-comp">
        <div className={`circle-img ${props.id}`}>
            
        </div>
        <div className="t_name">
            {props.name}
        </div>
    </div>

            

   
  );
}

export default PicName;


