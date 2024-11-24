
import React from "react";
import contacts from "./contacts";
import Classcard from "./Classcard";
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
        <div className="notes-start">
    
        <div className="class-name">
          TE E&TC
        </div>
        <div className="sub-box">
          
          
          {contacts.map(createCard)}
          
        </div>

      </div> 
    );
}
export default NotesOpen;