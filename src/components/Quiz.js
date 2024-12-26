import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizData } from './data/quizData';
import './Quiz.css';

function Quiz() {
  const { topicId, level } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Find the current topic and its questions
  const topic = quizData.topics.find(t => t.id === topicId);
  const questions = topic?.levels[level] || [];

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      navigate('/result', { 
        state: { 
          score, 
          total: questions.length,
          topic: topicId,
          level 
        } 
      });
    }
  };

  if (questions.length === 0) {
    return <div className="loading">No questions available for this topic</div>;
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>{topic.name} - {level.charAt(0).toUpperCase() + level.slice(1)}</h2>
        <p>Question {currentQuestion + 1} of {questions.length}</p>
      </div>
      <div className="question-card">
        <h3>{questions[currentQuestion].question}</h3>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                selectedAnswer === index 
                  ? index === questions[currentQuestion].correctAnswer 
                    ? 'correct' 
                    : 'wrong'
                  : ''
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="quiz-actions">
          {selectedAnswer === null && (
            <button 
              className="show-answer-btn"
              onClick={() => setShowExplanation(!showExplanation)}
            >
              {showExplanation ? 'Hide Answer' : 'Show Answer'}
            </button>
          )}
          {showExplanation && (
            <div className="explanation">
              <p>Correct Answer: {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}</p>
              <p>{questions[currentQuestion].explanation}</p>
            </div>
          )}
          {selectedAnswer !== null && (
            <button className="next-btn" onClick={handleNext}>
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz; 