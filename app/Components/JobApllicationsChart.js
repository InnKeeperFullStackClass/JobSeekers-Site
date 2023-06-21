import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const JobApplicationsChart = () => {
  const [chartData, setChartData] = useState({
    labels: [], // Add your chart labels here
    datasets: [
      {
        label: "Applications",
        data: [], // Add your chart data here
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  const [shareCount, setShareCount] = useState(0);

  useEffect(() => {
    // Fetch chart data from API
    fetch("/api/jobApplicationsData")
      .then((response) => response.json())
      .then((data) => setChartData(data));

    // Fetch share count from API
    fetch("/api/shareCountData")
      .then((response) => response.json())
      .then((data) => setShareCount(data.count));
  }, []);

  return (
    <div>
      <h2>Job Applications</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default JobApplicationsChart;
