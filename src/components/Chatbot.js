import React from 'react';

const Chatbot = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '300px',
      height: '400px',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      zIndex: 1000
    }}>
      <h3>Chatbot</h3>
      <p>How can I help you today?</p>
    </div>
  );
};

export default Chatbot;
