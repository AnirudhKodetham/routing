import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Chatbot from './components/Chatbot';
import './App.css'; // Ensure to import your CSS file for styling

const App = () => {
  useEffect(() => {
    document.title = 'Routing';
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
      <ConditionalChatbot />
    </Router>
  );
};

const ConditionalChatbot = () => {
  const location = useLocation();

  return location.pathname === '/support' ? <Chatbot /> : null;
};

export default App;
