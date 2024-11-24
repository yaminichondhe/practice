import react from "react";
import Postcard from "./Postcard";
import Ach from "./Ach";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Ach.css";
import { faHeart, faComment, faCirclePlus } from '@fortawesome/free-solid-svg-icons';



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
      <div className="post-cards">
      {Ach.map(createPost)}
       </div>
      
      <div className='addpost'>
        <FontAwesomeIcon icon={faCirclePlus} aria-hidden="true" />
      </div>
      </>
      
    )
}
export default Achi;