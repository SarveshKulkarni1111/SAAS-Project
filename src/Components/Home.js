// Home.js

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <h1>Unlock Your Company's Potential with Data-Driven Insights</h1>
            <p>
              Elevate your business strategy with powerful dashboards and analytics. Gain valuable insights that empower decision-makers and drive overall growth.
            </p>
            <Link to="/dashboard" className="cta-button">
              Explore Insights
            </Link>
          </div>
          <div className="hero-image">
            <img src="https://shorturl.at/fyDN4" alt="Business Growth" />
          </div>
        </section>
      </div>
      <footer>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
