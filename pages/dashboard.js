"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

import ApplicationTracker from "@/app/Components/ApplicationTracker";
import JobSearch from "@/app/Components/JobSearch";
import ProfileSummary from "@/app/Components/ProfileSummary";
import ResumeUploadForm from "@/app/Components/ResumeUploadForm";
import SavedJobs from "@/app/Components/SavedJobs";
import JobSeekerLayout from "@/layout/JobSeekerLayout";

const UserDashboard = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  const handleUpload = (resume) => {
    // Perform upload logic
    console.log("Resume uploaded:", resume);
  };

  return (
    <JobSeekerLayout className="mb-7">
      <motion.div
        className=" flex flex-col items-center justify-center h-full px-4"
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
      </motion.div>
    </JobSeekerLayout>
  );
};

export default UserDashboard;
