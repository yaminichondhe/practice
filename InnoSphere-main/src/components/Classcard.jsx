
import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Classcard(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} width='100%' />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        
      </div>
    </div>
  );
}

export default Classcard;