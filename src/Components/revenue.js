import React, { useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import "./revenue.css";
import GeoChart from './geochart';
import RevenueGraph from './revenuegraph';

const Revenue = () => {
 
    
  return (
    <div className='app-container'>
    <Sidebar />
    <div className='main-content'>
    <div className="revenue-card">
      <h2>Total Revenue</h2>
      <p>500000</p>
    </div>
    <GeoChart /> 
    <RevenueGraph />
    </div>
    </div>
  );
};

export default Revenue;
