// AboutUs.js (React Component)
import React from 'react';
import Navbar from "./Navbar";
import "./About.css";
const AboutUs = () => {
  return (
    <div>
    <Navbar />
    <div className="about-us-container">
    
      <h2>About Us</h2>
      <p>
        Welcome to our ERP platform, where we strive to provide innovative solutions for your business needs.
      </p>
      <p>
        Our team of dedicated professionals is committed to delivering high-quality products and services
        that streamline your business processes and boost productivity.
      </p>
      <p>
        Whether you are a small business or a large enterprise, our ERP solutions are designed to scale
        and adapt to your unique requirements.
      </p>
      <p>
        Contact us today to learn more about how our ERP system can transform your business operations.
      </p>
    </div>
    <footer>
        <p>&copy; 2023 ERP Solutions Company. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default AboutUs;
