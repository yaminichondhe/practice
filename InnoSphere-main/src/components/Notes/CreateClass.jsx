import React from "react";
import contacts from "./contacts";
import Classcard from "./Classcard";
import "./Notes.css";
import Navi from "../Navbar/Navi";
import Foot from "../Footer/Foot";
import Navi2 from "../Navbar/Navi2";
import V_navi from "../Navbar/V_navi";


function CreateClass(){
  
   
    function createCard(contact) {
        return (
          <Classcard
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            
          />
        );
      }
    return(
     
        <div className="sub-box" >
          
          
          {contacts.map(createCard) }
          
        </div>
    );
}
export default CreateClass;