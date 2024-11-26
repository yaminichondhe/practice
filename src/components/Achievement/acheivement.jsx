import react from "react";
import Postcard from "./Postcard";
import Ach from "./Ach";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Ach.css";
import { faHeart, faComment, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Navi from "../Navbar/Navi";
import V_navi from "../Navbar/V_navi";


function Achi(){
  function createPost(detail){
    return(
      <Postcard
      key={detail.id}
      photo={detail.photo}
      name={detail.name}
      description={detail.description}
      certificate={detail.certificate}
      />

    );
  }
    
    return(
      <>
      
      <V_navi />
      <div className="main-content">
      <div className="post-cards">
      {Ach.map(createPost)}
       </div>
      
      <div className='addpost'>
        <FontAwesomeIcon icon={faCirclePlus} aria-hidden="true" />
      </div>
      </div>
      
      </>
      
    )
}
export default Achi;