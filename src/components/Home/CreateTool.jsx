import React from "react";
import imag from "./imag";
import Toolcard from './Toolcard';
import "./Home.css";

function CreateTool() {
  return (
    <div className='tools'>
      {imag.map(image => (
        <Toolcard 
          key={image.id} 
          id={image.id} 
          name={image.name} 
          path={image.path} 
        />
      ))}
    </div>
  );
}

export default CreateTool;

// import React from "react";
// import imag from "./imag";
// import Toolcard from './Toolcard';
// import "./Home.css";
// function CreateTool(){
//     function createTool(image){
//         return(
//           <Toolcard key={image.id} id={image.id} name={image.name} path={image.path} />
    
//         );
//       }
//     return(
//         <div className='tools'>
//           {imag.map(createTool)}
//         </div>
//     );
// }
// export default CreateTool;