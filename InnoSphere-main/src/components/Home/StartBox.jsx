import React, { useState } from "react";
import welcomeContents from './WelcomeContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./Home.css";
import Navi2 from "../Navbar/Navi2";

function StartBox(props) {
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current content index
  const [slideDirection, setSlideDirection] = useState(''); // To track the direction of slide

  const handleSlideRight = () => {
    setSlideDirection('right'); // Set the direction to right
    setCurrentIndex((prevIndex) => (prevIndex + 1) % welcomeContents.length); // Loop to the next content
  };

  const handleSlideLeft = () => {
    setSlideDirection('left'); // Set the direction to left
    setCurrentIndex((prevIndex) => (prevIndex - 1 + welcomeContents.length) % welcomeContents.length); // Loop to the previous content
  };

  return (
    
      <div className='start-box'>
        <div className="welcome">
        {/* <div className="left-shift">
          <div onClick={handleSlideLeft}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </div> */}
        
        <div className="changing-content " style={{ backgroundColor: welcomeContents[currentIndex].color }}>
            <div className="changing-matter">
            <h1>{welcomeContents[currentIndex].text}</h1>
            <p>{welcomeContents[currentIndex].p}</p>
            
              {/* <button
                type="button"
                id="nn"
                className="btn-primary"
                
              >
                Start
              </button> */}
             
            </div>
            <div className="arrows">
            <div className="left-shift">
          <div onClick={handleSlideLeft}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </div>
        <div className="right-shift">
          <div onClick={handleSlideRight}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
            </div>
            <div className={`c${currentIndex}`} />
              
            
          </div>
          

        {/* <div className="changing-content " style={{ backgroundColor: welcomeContents[currentIndex].color }}>
          <div className="Nav-container"><Navi2 /></div>
          <div className="img-matter-container">
          <div className={`c${currentIndex}`} />
          <div className="changing-matter">
            <h1>{welcomeContents[currentIndex].text}</h1>
            <h3>{welcomeContents[currentIndex].h3}</h3>
            <p>{welcomeContents[currentIndex].p}</p>
          </div>
          </div>
        </div> */}

        {/* <div className="right-shift">
          <div onClick={handleSlideRight}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div> */}
      </div>
      </div>
    
  );
}

export default StartBox;
