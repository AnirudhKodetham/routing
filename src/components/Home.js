import React from 'react';
import wikiImage from '../assets/wikiImage.jpg'; // Ensure you have an image in src/assets folder

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <img src={wikiImage} alt="Wikipedia" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
};

export default Home;
