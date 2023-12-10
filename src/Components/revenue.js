import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import Sidebar from './Sidebar';
import "./revenue.css";
import GeoChart from './geochart';

const Revenue = () => {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Profit Margin',
        data: [10, 15, 8, 20],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };


    const chartRef = useRef(null);
  
    useEffect(() => {
      // Create the chart using Chart.js
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }, []);
  return (
    <div className='app-container'>
    <Sidebar />
    <div className='main-content'>
    <div className="revenue-card">
      <h2>Total Revenue</h2>
      <p>500000</p>
    </div> 
    <canvas ref={chartRef} width="200" height="100"></canvas>
  <GeoChart />
    </div>
    </div>
  );
};

export default Revenue;
