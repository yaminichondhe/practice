import React from "react";
import "./ForumSec.css";
function ForumSec(){
    return(
        <div className="forum-sec">
        <div className="question-section">
          <h2>Question</h2>
          <div className="question-content">
            <p>What is the best way to learn React?</p>
          </div>
          <div className="question-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Post</button>
          </div>
        </div>
      
        <div className="answer-section">
          <h2>Answers</h2>
          <div className="answer-content">
            <p>The best way to learn React is by building projects and using resources like the official React documentation and interactive tutorials.</p>
          </div>
          <div className="answer-actions">
            <button>Like</button>
            <button>Reply</button>
            <button>Post</button>
          </div>
        </div>
      </div>
    );
}
export default ForumSec;