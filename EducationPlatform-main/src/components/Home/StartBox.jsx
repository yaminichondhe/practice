import React, { useState } from "react";
import welcomeContents from './WelcomeContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./Home.css";

function StartBox(props){
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current content index

  
  const handleSlideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % welcomeContents.length); // Loop to the next content
  };

  const handleSlideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + welcomeContents.length) % welcomeContents.length); // Loop to the previous content
  };
return(
    
  <div className='welcome'>
      <div className='start-box'>
          <div className="left-shift">
          <button onClick={handleSlideLeft}>
            <FontAwesomeIcon icon={faArrowLeft} /> 
          </button>
          </div>
          <div className="changing-content">
          <div className={`c${currentIndex}`}>
          
            </div>
            <h2>{welcomeContents[currentIndex].text}</h2>
          </div>
          <div className="right-shift">
          <button onClick={handleSlideRight}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </div>
      </div>
      </div>
      
      
    );

}

export default StartBox;