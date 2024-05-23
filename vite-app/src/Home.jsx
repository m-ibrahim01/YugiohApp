import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import bannerImage from './Images/YugiohBanner.jpg';

function Home() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to the Yugioh Collection Builder</h1>
        <p>Start sharing your collection online today!</p>
        <Link to="/login" className="login-button">Lets Duel!</Link>
      </div>
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </div>
  );
}

export default Home;
