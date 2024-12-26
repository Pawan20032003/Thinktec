import React from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBrain, FaJava, FaPython } from 'react-icons/fa';
import './Topics.css';

function Topics() {
  const topics = [
    { 
      id: 'aptitude', 
      name: 'Aptitude', 
      icon: <FaBrain />,
      description: 'Test your logical and mathematical skills'
    },
    { 
      id: 'html', 
      name: 'HTML', 
      icon: <FaHtml5 />,
      description: 'Practice HTML fundamentals and advanced concepts'
    },
    { 
      id: 'css', 
      name: 'CSS', 
      icon: <FaCss3Alt />,
      description: 'Test your CSS styling knowledge'
    },
    { 
      id: 'javascript', 
      name: 'JavaScript', 
      icon: <FaJs />,
      description: 'Challenge yourself with JavaScript problems'
    },
    { 
      id: 'react', 
      name: 'React', 
      icon: <FaReact />,
      description: 'Master React concepts and best practices'
    },
    { 
      id: 'java', 
      name: 'Java', 
      icon: <FaJava />,
      description: 'Test your Java programming skills'
    },
    { 
      id: 'python', 
      name: 'Python', 
      icon: <FaPython />,
      description: 'Practice Python programming concepts'
    }
  ];

  return (
    <div className="topics">
      <h1>Select a Topic</h1>
      <div className="topics-grid">
        {topics.map(topic => (
          <div key={topic.id} className="topic-card">
            <div className={`topic-icon ${topic.id}`}>
              {topic.icon}
            </div>
            <h2>{topic.name}</h2>
            <p>{topic.description}</p>
            <div className="difficulty-buttons">
              <Link 
                to={`/quiz/${topic.id}/easy`} 
                className="btn btn-primary"
              >
                Easy
              </Link>
              <Link 
                to={`/quiz/${topic.id}/difficult`} 
                className="btn btn-secondary"
              >
                Difficult
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;