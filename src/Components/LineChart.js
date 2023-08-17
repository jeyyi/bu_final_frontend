import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [12, 19, 3, 5, 2],
        borderColor: "#3e95cd",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category", // 'category' for non-numeric labels
        position: "bottom",
        beginAtZero: true,
      },
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "70%", height: "400px", margin: "0 auto" }}>
      <Line data={data} options={options} id={1} />
    </div>
  );
};

export default LineChart;
