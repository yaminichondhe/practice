import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StartBox from './components/Home/StartBox';
import Foot from './components/Footer/Foot';
import Navi from './components/Navbar/Navi';
import Forum from './components/Home/Forum';
import NotesOpen from "./components/Notes/NotesOpen";
import NotesMain from "./components/Notes/NotesMain";
import ForumSec from "./components/Forum/ForumSec";
import Achi from "./components/Achievement/acheivement";
import Tlog from "./components/login forms/Tlog";
import Slog from "./components/login forms/Slog";
import CreateTool from "./components/Home/CreateTool";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Attendance from "./components/Attendance/Attendance";
import Statistics from "./components/Statistics/Statistics";
import Home2 from "./components/Home2/Home2";
import Home from "./components/Home/Home";
import Navi2 from "./components/Navbar/Navi2";
import StuDash from "./components/Dashboard/StuDash";


function App() {
  return (
    <div className="App">
       
        
        <div className='gradient-background'>
        
        
          <StartBox />
          <div className='title'>
            <Forum />
            
          </div>
        </div>
        
        <Foot />
    </div>
  );
}

export default App;
