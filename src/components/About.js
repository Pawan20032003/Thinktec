import React from 'react';
import Header from './Header';
 import './About.css';

function About() {
  return (
    <div className="page-container">
      <Header />
      <main className="about">
        <div className="about-content">
          <h1>About IT Exam Practice</h1>
          <p>
            IT Exam Practice is a comprehensive platform designed to help students
            and professionals prepare for various IT certification exams and technical
            interviews.
          </p>
          <div className="about-features">
            <h2>What We Offer:</h2>
            <ul>
              <li>Comprehensive question bank covering multiple technologies</li>
              <li>Practice tests with varying difficulty levels</li>
              <li>Detailed explanations for each answer</li>
              <li>Progress tracking and performance analytics</li>
              <li>Regular updates with new questions and topics</li>
            </ul>
          </div>
        </div>
      </main>
    
    </div>
  );
}

export default About; 