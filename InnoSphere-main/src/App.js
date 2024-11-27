import React, { useState } from 'react';
import img from './images/28766185_7495399.svg';
import img3 from './images/6195525_3156619.svg';
import img6 from './images/19245721_6099964.svg';
import img7 from './images/man_7122923.png';
import img5 from './images/taking-notes-concept-illustration.png';
import img4 from './images/aaa.png';
import img8 from './images/352270_close_icon (1).png';
import img9 from './images/bagpack_17618299.png';
import img10 from './images/111104_user_business_man_icon.png';
import img11 from './images/1693321165045.jpg';
import img12 from './images/298794_home_icon.png';
import img13 from './images/sampledata.png';
import img14 from './images/stud.webp';
import img15 from './images/teacher.webp';
import img16 from './images/logo-transformed.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/Navbar/Navi';
import StartBox from './components/Home/StartBox';


function App() {
  // Manage state for showing tools, showing subject code input, and questions
  const [isToolsVisible, setIsToolsVisible] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [showTeacherSignup, setShowTeacherSignup] = useState(false);
  const [showStudentSignup, setShowStudentSignup] = useState(false);
  const [showAttendanceStats, setShowAttendanceStats] = useState(false);

  // Toggle tools visibility
  const toggleTools = () => {
    setIsToolsVisible(!isToolsVisible);
    document.body.classList.toggle('freeze-background', isToolsVisible);
  };

  // Add new question with answer to the state
  const handleAddQuestionWithAnswer = (e) => {
    e.preventDefault();
    if (newQuestion.trim() || newAnswer.trim()) {
      setQuestions([
        ...questions,
        {
          text: newQuestion,
          answers: newAnswer ? [newAnswer] : [],
        },
      ]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  // Add new answer to an existing question
  const handleAddAnswer = (index, answerText) => {
    if (answerText.trim()) {
      const updatedQuestions = [...questions];
      updatedQuestions[index].answers.push(answerText);
      setQuestions(updatedQuestions);
    }
  };

  // Show/hide subject code input based on role
  const toggleSubjectCode = (role) => {
    const subjectCodeInput = document.getElementById('subjectCodeInput');
    subjectCodeInput.style.display = role === 'teacher' ? 'block' : 'none';
  };

  // Toggle teacher and student signup visibility
  const toggleTeacherSignup = () => setShowTeacherSignup(!showTeacherSignup);
  const toggleStudentSignup = () => setShowStudentSignup(!showStudentSignup);
  const toggleAttendanceStats = () => setShowAttendanceStats(!showAttendanceStats);

  return (
    <div className="App">
      <Navi />

      
        <div className="title">
          <StartBox />

          {/* <div className="welcome">
            <div className="head">
              <h1 className="th1">Hello User !</h1>
              <p className="disc">
                Welcome, Explore Your Gateway to Smarter Learning and Seamless
                Collaboration!
              </p>
              <button
                type="button"
                id="nn"
                className="btn-primary"
                onClick={toggleTeacherSignup}
              >
                Start
              </button>
            </div>
            <div className="img">
              <img src={img} width={400} alt="User Image" />
            </div>
          </div> */}
          <div className="forums">
            <h1>Forums</h1>
            <p className="disc">
              Join the discussion and share your thoughts with the community in
              various forums.
            </p>
            <button
              type="button"
              className="bt-primary"
              onClick={toggleStudentSignup}
            >
              Explore
            </button>
            <div className="forumimg"></div>
          </div>
        </div>

        <div className="tools">
          <div className="f1">
            <div className="stats">
              <img
                src={img3}
                style={{ width: '100%', height: '90%' }}
                alt="Stats"
              />
            </div>
            <div className="ach">
              <img
                src={img4}
                style={{ width: '90%', height: '90%' }}
                alt="Achievement"
              />
            </div>
          </div>

          <div className="f2">
            <div className="att">
              <img
                src={img6}
                style={{ width: 'auto', height: '90%' }}
                alt="Attendance"
              />
            </div>
            <div className="notes">
              <img
                src={img5}
                style={{ width: 'auto', height: '90%' }}
                alt="Notes"
              />
            </div>
          </div>

          <div className="f3">
            <div className="t1">
              <img src={img7} width={80} alt="Teacher 1" />
            </div>
            <div className="t2">
              <img src={img7} width={80} alt="Teacher 2" />
            </div>
            <div className="t3">
              <img src={img7} width={80} alt="Teacher 3" />
            </div>
          </div>

          <div className="f4">
            <div className="s1">
              <img src={img7} width={80} alt="Student 1" />
            </div>
            <div className="s2">
              <img src={img7} width={80} alt="Student 2" />
            </div>
            <div className="s3">
              <img src={img7} width={80} alt="Student 3" />
            </div>
          </div>
        </div>

        <footer className='ft'>

<div className='binf'>
  <div className='logo'>
  <img src={img16} width='60%'></img>
  </div>
  <div className='contact'>
<h5>Contact</h5>
 
    <li>InnoSphere</li>
    <li>InnoSphere@gmail.com</li>
    <li>+129381</li>

</div>
<div className='mt'>
<h5>Move to</h5>
 
<li>Home</li>
<li>Forums</li>
<li>Contact</li>

</div>


</div>

</footer>
      </div>
    
  );
}

export default App;