// PieChart.js

import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import "./itemDefect.css"; // Import your custom CSS for styling

const PieChart = () => {

    const data1 = {
        labels: [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
          ],
        datasets: [
          {
            label: 'Complaints',
            data: [10, 15, 8, 20,10,8,12,16,25,14,12,10],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

  const data = {
    labels: ['Daily needs', 'Stationery', 'Hardware', 'Raw materials'],
    datasets: [
      {
        data: [15, 20, 20, 5], // Hardcoded data for the example
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // Customize colors as needed
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  };

  const chartRef = useRef(null);
  
    useEffect(() => {
      // Create the chart using Chart.js
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: data1,
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
    
    <div className="pie-chart-container">
      <Pie data={data} />
      <canvas ref={chartRef} width="200" height="100" className='component2'></canvas>
    </div>
  );
};

export default PieChart;
