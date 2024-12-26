import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Result.css';

function Result() {
  const location = useLocation();
  const { score, total, topic, level } = location.state || { 
    score: 0, 
    total: 0, 
    topic: '', 
    level: '' 
  };

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result">
      <h1>Quiz Complete!</h1>
      <div className="result-card">
        <h2>{topic.toUpperCase()} - {level}</h2>
        <div className="score-display">
          <div className="score-circle">
            <span className="score-percentage">{percentage}%</span>
          </div>
          <p className="score-text">
            You scored {score} out of {total} questions
          </p>
        </div>
        <div className="result-actions">
          <Link to="/topics" className="btn btn-primary">
            Try Another Topic
          </Link>
          <Link to={`/quiz/${topic}/${level}`} className="btn btn-primary">
            Retry This Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Result; 