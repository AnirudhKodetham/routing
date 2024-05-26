import React from 'react';

const About = () => {
  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <h2>About</h2>
      <iframe
        src="https://en.wikipedia.org/wiki/Wikipedia"
        style={{ width: '100%', height: '100%' }}
        title="Wikipedia"
      ></iframe>
    </div>
  );
};

export default About;
