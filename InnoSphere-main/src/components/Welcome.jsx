


import img from '../images/28766185_7495399.svg';

import React from "react";

function Welcome() {
    return (
        <div className='welcome'>
        <div className='head'>
          <div className='th1'> <h1>Hello User !</h1></div>
          <p className='disc'>Welcome, Explore Your Gateway to Smarter Learning and Seamless Collaboration! </p>
          <button type="button" id='nn' class="btn-primary" /*onClick={clghide}*/>Start</button>
        </div>
        <div className='img'>
          <img src={img} width={400}></img>
        </div>
        </div>
    );
  }
  
  export default Welcome;