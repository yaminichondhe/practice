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

function App() {
  return (
    <div className="App">
      
        <Navi />
        <div className='gradient-background'>
          
        
          <StartBox />
          <div className='title'>
            <Forum />
            <CreateTool />
          </div>
        </div>
        
        
            
            <Routes>
            {/* Individual tool routes */}
            <Route path="/Notes/NotesOpen" element={<NotesOpen />} />
            <Route path="/Notes/NotesMain" element={<NotesMain />} />
            <Route path="/Achievement/achievement" element={<Achi />} />
            <Route path="/Forum/ForumSec" element={<ForumSec />} />
            <Route path="/login forms/Tlog" element={<Tlog />} />
            <Route path="/login forms/Slog" element={<Slog />} />
            <Route path="/Attendance/attendance" element={<Attendance/>} />
            <Route path="/Statistics/Statistics" element={<Statistics/>} />
          </Routes>
        
        <Foot />
      
    </div>
  );
}

export default App;
