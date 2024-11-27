import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import Navi from "../Navbar/Navi";
import StartBox from "./StartBox";
import Forum from "./Forum";
import CreateTool from "./CreateTool";

function Home() {
  return (
    <div className="home">
        <Navi />
        
        <div className='gradient-background'>
          
        
          <StartBox />
          <div className='title'>
            <Forum />
            <CreateTool />
          </div>
        </div>
    </div>
  );
}

export default Home;
