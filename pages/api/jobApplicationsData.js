// Assuming you have Express.js set up

app.get("/api/jobApplicationsData", (req, res) => {
  // Fetch data from your database or any other data source
  // Example data for demonstration purposes
  const jobApplicationsData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Applications",
        data: [12, 19, 8, 15, 10],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Send the data as the response
  res.json(jobApplicationsData);
});
