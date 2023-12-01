import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "./VarianceGraph.css"

const BudgetVarianceChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((item) => item.month),
        datasets: [
          {
            label: 'Expected Budget',
            data: data.map((item) => item.expected),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Actual Budget',
            data: data.map((item) => item.actual),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data]);

  return (
    <div className="bar-graph-container">
      <canvas ref={chartRef}  className="bar-graph1" />
    </div>
  );
};

export default BudgetVarianceChart;
