import React from "react";
import "./Forum2.css";
import Navi from "../Navbar/Navi";
import Foot from "../Footer/Foot";
import  { useState } from 'react';


function Forum2(){
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
    return(
      <>
      <Navi />
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
        
      <Foot />
      </>
    );
}
export default Forum2;