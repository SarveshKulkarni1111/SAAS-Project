import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './BarGraph.css'; // Import the CSS file

const BarGraph = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((item) => item.label),
        datasets: [
          {
            label: 'Values',
            data: data.map((item) => item.value),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
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

  return <canvas ref={chartRef} className="bar-graph"  />;
};

export default BarGraph;
