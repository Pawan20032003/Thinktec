import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Topics from './components/Topics';
import Quiz from './components/Quiz';
import Result from './components/Result';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/topics" element={<Layout><Topics /></Layout>} />
        <Route path="/quiz/:topicId/:level" element={<Layout><Quiz /></Layout>} />
        <Route path="/result" element={<Layout><Result /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App; 