import React from "react";
import contacts from "./contacts";
import Classcard from "./Classcard";
import "./Notes.css";
import Navi from "../Navbar/Navi";
import Foot from "../Footer/Foot";


function NotesOpen(){
  
   
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
      <>
      <Navi />
        <div className="notes-start">
        <div className="notes-title">
          <p>Notes Section</p>
        </div>
        <div className="class-name">
          TE E&TC
        </div>
        <div className="sub-box" >
          
          
          {contacts.map(createCard) }
          
        </div>

      </div> 
      <Foot />
      </>
    );
}
export default NotesOpen;