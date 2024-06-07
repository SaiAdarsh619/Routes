// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/about');
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <button onClick={handleRedirect}>Go to About Page</button>
    </div>
  );
};

export default Home;
