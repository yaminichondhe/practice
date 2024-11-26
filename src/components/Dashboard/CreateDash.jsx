import React from "react";
import imag from "./imag";
import DashCard from "./DashCard";
import "./DashCard.css";
function CreateDash(){
    function createdash(dash){
        return(
          <DashCard key={dash.id} id={dash.id} hd1={dash.hd1} No={dash.No} />
    
        );
      }
    return(
        <div className='Dash'>
          {imag.map(createdash)}
        </div>
    );
}
export default CreateDash;