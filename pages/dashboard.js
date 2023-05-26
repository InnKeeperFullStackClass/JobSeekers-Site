import JobSeekerLayout from "@/layout/JobSeekerLayout";
import React from "react";

const UserDashboard = () => {
  return (
    <JobSeekerLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-semibold">Welcome to Your Dashboard</h1>
        {/* Add your dashboard components and content here */}
      </div>
    </JobSeekerLayout>
  );
};

export default UserDashboard;
