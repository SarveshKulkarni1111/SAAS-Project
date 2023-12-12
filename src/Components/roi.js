// Import necessary libraries
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './roi.css'; 

// Hardcoded data for company's ROI
const data1 = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Company ROI',
      data: [10, 15, 8, 20],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

// Define the React component
const ROIChart = () => {
  return (
    <div className="chart-container">
      <Bar
        data={data1}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ROIChart;
