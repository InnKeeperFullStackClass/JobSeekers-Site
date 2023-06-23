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
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import JobApplicationForm from "@/app/Components/JobApplicationForm";

const UserDashboard = () => {
  const [shareCount, setShareCount] = useState(0);

  useEffect(() => {
    fetch("/api/shareCountData")
      .then((response) => response.json())
      .then((data) => setShareCount(data.count));

    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  const handleUpload = (resume) => {
    console.log("Resume uploaded:", resume);
  };

  const shareURL = "https://example.com";

  return (
    <JobSeekerLayout>
      <motion.div
        className="mb-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-2xl text-center font-bold mb-5 mt-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to Your Dashboard
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

          <motion.div data-aos="fade-down" data-aos-delay="800">
            <JobApplicationForm />
          </motion.div>

          <motion.div data-aos="fade-down" data-aos-delay="1000">
            <ApplicationTracker />
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center h-full px-4 mt-4">
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
