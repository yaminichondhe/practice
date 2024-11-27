import React from "react";
import "./Statistics.css";
import S_opts from "./S_opts";

function Option(props) {
  return (
    <div className="opt-c">
        <div className="a-count">
            {props.Att_count}
        </div>
        <div className="opt">
            {props.option}
        </div>
    </div>

            

   
  );
}

export default Option;


