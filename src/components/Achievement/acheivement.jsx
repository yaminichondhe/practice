import react from "react";
import Postcard from "./Postcard";
import Ach from "./Ach";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Ach.css";
import { faHeart, faComment, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Navi from "../Navbar/Navi";
import Foot from "../Footer/Foot";


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
      <Navi />
      <div className="post-cards">
      {Ach.map(createPost)}
       </div>
      
      <div className='addpost'>
        <FontAwesomeIcon icon={faCirclePlus} aria-hidden="true" />
      </div>
      <Foot />
      </>
      
    )
}
export default Achi;