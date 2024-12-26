import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
    <div className="home">
      <div className="home-content">
        <h1>Welcome to IT Exam Practice</h1>
        <p>
          Prepare for your IT exams with our comprehensive practice platform.
          Choose from various topics and difficulty levels to enhance your knowledge.
        </p>
        <div className="features">
          <h2>Features:</h2>
          <ul>
            <li>Multiple programming languages and topics</li>
            <li>Two difficulty levels: Easy and Difficult</li>
            <li>20 questions per quiz</li>
            <li>Instant feedback on your answers</li>
            <li>Final score summary</li>
          </ul>
        </div>
        <Link to="/topics" className="start-btn">
          Start
        </Link>
      </div>
    </div>
    </>
     
  );
}

export default Home; 