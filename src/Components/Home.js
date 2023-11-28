import React from 'react';
import Navbar from './Navbar';
import './Home.css'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
    <Navbar />
    <div class="container">
        <section class="hero">
            <div class="hero-content">
                <h1>Streamline Your Business with Our ERP Solutions</h1>
                <p>Enhance efficiency, reduce costs, and optimize processes with our cutting-edge ERP software.</p>
                <Link to="/about"className="cta-button" style={{ textDecoration: 'none' }} > Get Started</Link>
            </div>
            <div class="hero-image">
                <img src="https://frappe.io/files/erpnext-hero-conference.png" alt="ERP Conference" />
            </div>
        </section>
    </div>
    <footer>
        <p>&copy; 2023 ERP Solutions Company. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default Home;
