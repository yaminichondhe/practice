import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Ach from "./Ach";
import "./Ach.css";
function Postcard(props){
    return(
      <div className='post'>
      <div className='prof'>
      <div className='photo'>
       <img  src={props.photo} width='100%'></img>
      </div>
      <div className="profile-name">
        <p>{props.name}</p>
      </div>
      </div>
      <div className="certificate">
        <img src={props.certificate}></img>
      </div>
      
      <div className='like'>
         <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
         <FontAwesomeIcon icon={faComment} aria-hidden="true" />
      </div>
      <div className='discript'>
      {props.description}
      </div>
      
      </div>
    )
}
export default Postcard;