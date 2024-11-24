import img from './images/28766185_7495399.svg';
import img3 from './images/6195525_3156619.svg';
import img6 from './images/19245721_6099964.svg';
import img7 from './images/man_7122923.png'
import img5 from './images/taking-notes-concept-illustration.png'
import img4 from './images/aaa.png';
import img8 from './images/352270_close_icon (1).png';
import img9 from './images/bagpack_17618299.png';
import img10 from './images/111104_user_business_man_icon.png';
import img11 from './images/1693321165045.jpg';
import img12 from './images/298794_home_icon.png';
import img13 from './images/sampledata.png';
import img14 from './images/stud.webp';
import img15 from './images/teacher.webp';
import img16 from './images/logo-transformed.png'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import contacts from "./components/contacts";

import NotesOpen from "./components/NotesOpen";

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([]); // State to store questions and answers
  const [newQuestion, setNewQuestion] = useState(''); // State for the new question input
  const [newAnswer, setNewAnswer] = useState(''); // State for the new answer input

  const handleAddQuestionWithAnswer = (e) => {
    e.preventDefault();
    if (newQuestion.trim() || newAnswer.trim()) {
      setQuestions([
        ...questions,
        {
          text: newQuestion,
          answers: newAnswer ? [newAnswer] : [], // Add question with the first answer, if any
        },
      ]);
      setNewQuestion(''); // Reset the question input
      setNewAnswer(''); // Reset the answer input
    }
  };

  const handleAddAnswer = (index, answerText) => {
    if (answerText.trim()) {
      const updatedQuestions = [...questions];
      updatedQuestions[index].answers.push(answerText); // Add a new answer to the specific question
      setQuestions(updatedQuestions);
    }
  }
  const [isToolsVisible, setIsToolsVisible] = useState(false);
  const [a, b] = useState(false);
  const [c, d] = useState(false);
  const [e, f] = useState(false);
  const [g, h] = useState(false);
  const [i, j] = useState(false);
  const [k, l] = useState(false);
  const [m, n] = useState(false);
  const [o, p] = useState(false);

  const toggleTools = () => {
    setIsToolsVisible(!isToolsVisible);
    
    if (!isToolsVisible) {
      document.body.classList.add('freeze-background');
    } else {
      document.body.classList.remove('freeze-background');
    }
  };
  const hide = () => {
    setIsToolsVisible(!isToolsVisible);
    
    if (!isToolsVisible) {
      document.body.classList.remove('.acttooll');
      document.body.classList.remove('freeze-background');
    } else {
      
      document.body.classList.remove('freeze-background');
    }
  };
  const clghide = () => {
    b(!a);
    
    if (a) {
      document.body.classList.add('signup');
      
    } 
  };
  const clghide1= () => {
     
    b(!a);
    
    if (a) {
      document.body.classList.remove('signup');
    } 
    
  };

 
  const logsign= () => {
    d(!c);
    
    if (c) {
      document.body.classList.add('logsignn');
    } 
  };
  const logsign1= () => {
     
    d(!c);
    
    if (!c) {
      document.body.classList.remove('logsignn');
    } 
    
  };
 

  const achbt= () => {
    f(!e);
    
    if (e) {
      document.body.classList.add('.achievementt');
    } 
  };


  
  const achbtt= () => {
    h(!g);
    
    if (g) {
      document.body.classList.add('.notes-sharingg');
    } 
  };
  const stu= () => {
    j(!i);
    
    if (i) {
      document.body.classList.add('.notes-sharingg');
    } 
  };
  const tea= () => {
    l(!k);
    
    if (k) {
      document.body.classList.add('.teachdashh');
    } 
  };
  const for2= () => {
    n(!m);
    
    if (m) {
      document.body.classList.add('.forums22');
    } 
  };
  const att= () => {
    p(!o);
    
    if (o) {
      document.body.classList.add('.attendance_statss');
    } 
  };


  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg bg-body-tertiary  " id='nav'>
    <div className="container-fluid custom-shadow">
    <a className="navbar-brand" href="#">EPIC</a>
    <a id='aa' onClick={toggleTools}><img src={img9} width='66%'></img></a>
    <a id='aac' ><img src={img12} width='70%'></img></a>
    <a id='aab' ><img src={img10} width='70%'  onClick={logsign}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={tea}>Teacher</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button"  aria-expanded="false" onClick={stu}>Student</a>

        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
   
  </div>
   </nav>
   <div className='gradient-background'>
    <div className='title'>
      <div className='welcome'>
        <div className='head'>
          <div className='th1'> <h1>Hello User !</h1></div>
          <p className='disc'>Welcome, Explore Your Gateway to Smarter Learning and Seamless Collaboration! </p>
          <button type="button" id='nn' class="btn-primary" onClick={clghide}>Start</button>
        </div>
        <div className='img'>
          <img src={img} width={400}></img>
        </div>
      </div>
      <div className='forums'>
      <h1>Forums</h1>
      <p className='disc'>Join the discussion and share your thoughts with the community in various forums.</p>
      <button type="button" className="bt-primary" onClick={for2}>Explore
       
      </button>
      
      <div className='forumimg'>
      
      </div>
      </div>

    </div>
    <div className='tools'>
      <div className='f1'>
        <div className='stats'>
        <img src={img3} style={{ width: "100%", height: "90%" }} alt="Responsive image" />

        </div>
        <div className='ach' >
        <img src={img4}  style={{ width: "90%", height: "90%" }} alt="Responsive image" />
        </div>
      </div>
      <div className='f2'>
        <div className='att'>
        <img src={img6} style={{ width: "auto", height: "90%" }} alt="Responsive image" />
        </div>
        <div className='notes'>
       <img src={img5} id='nn' style={{ width: "auto", height: "90%" }} alt="Responsive image"  />
        </div>
      </div>
      <div className='f3'>
        <div className='t1'>
        <img src={img7} width={80}/>
        </div>
        <div className='t2'>
        <img src={img7} width={80}/>
        </div>
        <div className='t3'>
        <img src={img7} width={80}/>
        </div>
      </div>
      <div className='f4'>
        <div className='s1'>
        <img src={img7} width={80}/>
        </div>
        <div className='s2'>
        <img src={img7} width={80}/>
        </div>
        <div className='s3'>
        <img src={img7} width={80}/>
        </div>
      </div>

    </div>
    <div className={isToolsVisible ? 'acttooll' : 'acttool'}>
    <div className='hide'><img onClick={hide} src={img8} width={20}></img></div>  
    <div className='f1'>
        <div className='stats'>
        <img src={img3} style={{ width: "100%", height: "90%" }} alt="Responsive image" onClick={att}/>

        </div>
        <div className='ach' onClick={achbt}>
        <img src={img4} style={{ width: "90%", height: "90%" }} alt="Responsive image"  />
        </div>
     
      
        <div className='att'>
        <img src={img6} style={{  width: "100%", height: "90%"}} alt="Responsive image" />
        </div>
        <div className='notes' onClick={achbtt}>
        <img src={img5} style={{  width: "100%", height: "90%"}} alt="Responsive image" />
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
    <div className={o ? 'attendance_statss' : 'attendance_stats'}>
      <div className='attendance_tools'>
      <div className='toptea'>
        <div className='tea1'></div>
        <div className='tea2'></div>
        <div className='tea3'></div>
      </div>
      <div className='topstu'>
      <div className='stu1'></div>
        <div className='stu2'></div>
        <div className='stu3'></div>
      </div>
      <div className='genderwise'></div>
      <div className='timely'></div>
      </div>
    </div>
    <div className={m ? 'forums22' : 'forums2'}>
    <div className="forums22">
    <div className="forum-sec">
        {/* Add Question and Answer Form */}
        <form onSubmit={handleAddQuestionWithAnswer} className="add-question-section">
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Write your question here..."
            required
          ></textarea>

          <div className="question-actions">
            <button type="submit">Add Question</button>
          </div>
        </form>

        {/* Render Questions and Answers */}
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="question-section">
            <h2>Question {qIndex + 1}</h2>
            <div className="question-content">{question.text}</div>

            {/* Answer Section */}
            <div className="answer-section">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const answerInput = e.target.elements.answerInput.value;
                  handleAddAnswer(qIndex, answerInput);
                  e.target.reset(); // Reset the input after submission
                }}
              >
                <textarea
                  name="answerInput"
                  placeholder="Write your answer here..."
                  required
                ></textarea>
                <div className="answer-actions">
                  <button type="submit">Post Answer</button>
                </div>
              </form>

              {/* Render Existing Answers */}
              {question.answers.map((answer, aIndex) => (
                <div key={aIndex} className="answer-content">
                  <p>Answer {aIndex + 1}: {answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

        </div>
    
    <div className={a ? 'signupp' : 'signup'}>
    <div className='clg'>
    <div className='hide2'><img  onClick={clghide1} src={img8} width={20}></img></div> 
      <form>
        <input name='college' type='text' placeholder='Enter College: '/>
        <input name='collegeCode' type='number' placeholder='Enter College Code: '/>
        <input name='dept' type='text' placeholder='Enter Department: '/>
        <input name='deptCode' type='number' placeholder='Enter Department Code: '/>
        <input name='submit' type='submit' id='aaa'/>
        
      </form>
      
    </div>
    
    <div className={c ? 'logsignn' : 'logsign'}>
    <div className='ls'>
    <div className='hide3'><img  onClick={logsign1} src={img8} width={20}></img></div> 
      <form>
        <input name='name' type='text' placeholder='Name: '/>
        <input name='email' type='email' placeholder='Email: '/>
        <input name='password' type='password' placeholder='Password: '/>
        <input name='submit' type='submit' id='bt'/>
        
      </form>
      <div className='btls'>
      <button type="button" className="btn btn-secondary bg-black">logIn</button>
      </div>
      
    </div>
    </div>
   
   
    </div>
    <div className={e ? 'achievementt' : 'achievement'}>
    <div className='post'>
      <div className='prof'></div>
      <div className='photo'>
       <img src={img11} width='100%'></img>
      </div>
      <div className='like'>
      <i class="fa fa-heart" aria-hidden="true"></i> <i class="fa fa-comment" aria-hidden="true"></i>
      </div>
      <div className='disc2'>
      Removed the "Name" field, keeping only the "Email" and "Password" inputs since the login typically only requires those fields.
      </div>
      
      </div>
      <div className='post'>
      <div className='prof'></div>
      <div className='photo'>
       <img src={img11} width='100%'></img>
      </div>
      <div className='like'>
      <i class="fa fa-heart" aria-hidden="true"></i> <i class="fa fa-comment" aria-hidden="true"></i>
      </div>
      <div className='disc2'>
      Removed the "Name" field, keeping only the "Email" and "Password" inputs since the login typically only requires those fields.
      </div>
   
      </div>
      <div className='addpost'>
        
      <FontAwesomeIcon icon={faCirclePlus} />
        
      </div>
    </div>
    <div className={g ? 'notes-sharing' : 'notes-sharingg'}>
    <NotesOpen/>
      </div>
      <div className={i ? 'studdashh' : 'studdash'}>
        <div className='give'>
          <img src={img14} width='100%'></img>
        </div>
        <div className='ttool'>
        <div className='giveatt'>
        <FontAwesomeIcon icon={faCirclePlus} width='25%'/>
        </div>
        <div className='overatt'>
          {/* <img src={img13} height='100%' ></img> */}
        </div>
      
      </div>
      <div className='comm'>
      <h5>See comments from Students</h5>
      </div>
      </div>

        <div className={k ? 'teachdashh' : 'teachdash'}>
        <div className='give'>
          <img src={img15} width='100%'></img>
        </div>
        <div className='ttool'>
        <div className='giveatt'>
        <FontAwesomeIcon icon={faCirclePlus} width='25%'/>
        </div>
        <div className='overatt'>
          {/* <img src={img13} height='100%' ></img> */}
        </div>
      
      </div>
      <div className='comm'>
        <h5>See comments from your Teachers</h5>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;




