import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaReact, FaBars, FaTimes, FaHome, FaBook, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './Header.css';
 
function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const location = useLocation();

  const handleSidebarHover = (expanded) => {
    if (window.innerWidth >= 1024) {
      setIsSidebarExpanded(expanded);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
      setIsSidebarExpanded(false);
    }
  }, [location]);

  const menuItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/topics', name: 'Topics', icon: <FaBook /> },
    { path: '/about', name: 'About', icon: <FaInfoCircle /> },
    { path: '/contact', name: 'Contact Us', icon: <FaEnvelope /> }
  ];

  return (
    <>
      <header className="header">
        <div className="header-content">
          <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link to="/" className="logo-link">
            <FaReact className="logo-icon" />
            <span>IT Exam Practice</span>
          </Link>

          <div className="header-actions">
           </div>
        </div>
      </header>

      <div 
        className={`sidebar ${isSidebarOpen ? 'active' : ''} ${isSidebarExpanded ? 'expanded' : ''}`}
        onMouseEnter={() => handleSidebarHover(true)}
        onMouseLeave={() => handleSidebarHover(false)}
      >
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => window.innerWidth < 1024 && setIsSidebarOpen(false)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-text">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      {isSidebarOpen && window.innerWidth < 1024 && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </>
  );
}

export default Header; 