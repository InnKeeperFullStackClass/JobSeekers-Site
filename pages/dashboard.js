"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import ApplicationTracker from "@/app/Components/ApplicationTracker";
import JobSearch from "@/app/Components/JobSearch";
import ProfileSummary from "@/app/Components/ProfileSummary";
import ResumeUploadForm from "@/app/Components/ResumeUploadForm";
import SavedJobs from "@/app/Components/SavedJobs";
import JobSeekerLayout from "@/layout/JobSeekerLayout";
// import { Bar } from "react-chartjs-2";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const UserDashboard = () => {
  // const [chartData, setChartData] = useState({
  //   labels: [], // Add your chart labels here
  //   datasets: [
  //     {
  //       label: "Applications",
  //       data: [], // Add your chart data here
  //       backgroundColor: "rgba(75, 192, 192, 0.6)",
  //       borderColor: "rgba(75, 192, 192, 1)",
  //       borderWidth: 1,
  //     },
  //   ],
  // });

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
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  // const chartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //       ticks: {
  //         precision: 0,
  //       },
  //     },
  //   },
  // };

  const handleUpload = (resume) => {
    // Perform upload logic
    console.log("Resume uploaded:", resume);
  };
  const shareURL = "https://example.com";

  return (
    <JobSeekerLayout>
      <motion.div
        className="flex flex-col items-center justify-center h-full px-4 mb-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-semibold mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to Your Dashboard
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-screen-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div data-aos="fade-down" data-aos-delay="200">
            <ProfileSummary />
          </motion.div>

          <motion.div data-aos="fade-down" data-aos-delay="400">
            <JobSearch />
          </motion.div>

          <motion.div data-aos="fade-down" data-aos-delay="600">
            <SavedJobs />
          </motion.div>

          <motion.div data-aos="fade-down" data-aos-delay="800">
            <ResumeUploadForm onUpload={handleUpload} />
          </motion.div>

          <motion.div data-aos="fade-down" data-aos-delay="1000">
            <ApplicationTracker />
          </motion.div>
        </motion.div>
        <div className="flex flex-col items-center justify-center h-full px-4">
          {/* <Bar data={chartData} options={chartOptions} /> */}
          <div className="flex items-center justify-center">
            <FacebookShareButton url={shareURL}>
              <FaFacebook size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareURL}>
              <BsTwitter size={32} round />
            </TwitterShareButton>
            <span className="ml-2">{shareCount} shares</span>
          </div>
        </div>
      </motion.div>
    </JobSeekerLayout>
  );
};

export default UserDashboard;
