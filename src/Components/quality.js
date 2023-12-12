import React from 'react';
import Sidebar from './Sidebar';
import PieChart from './itemDefects';
import "./quality.css";

const Quality = () => {
  return (
    <div className='app-container'>
    <Sidebar />
    <div className='main-content'>
    <div className="revenue-card">
      <h2>Customer Complaints</h2>
      <p>160</p>
    </div>
    <div className="revenue-card1">
      <h2>Defect Rate</h2>
      <p>12%</p>
    </div>
    <PieChart />
    </div>
    </div>
  );
};

export default Quality;
