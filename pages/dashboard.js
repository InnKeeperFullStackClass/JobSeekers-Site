import ApplicationTracker from "@/app/Components/ApplicationTracker";
import JobSearch from "@/app/Components/JobSearch";
import ProfileSummary from "@/app/Components/ProfileSummary";
import ResumeUploadForm from "@/app/Components/ResumeUploadForm";
import SavedJobs from "@/app/Components/SavedJobs";
import JobSeekerLayout from "@/layout/JobSeekerLayout";
import React from "react";

const UserDashboard = () => {
  return (
    <JobSeekerLayout>
      <div className=" bg-[#82A0AA]flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Welcome to Your Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-screen-xl">
          <div>
            <ProfileSummary />
          </div>

          <div>
            <JobSearch />
          </div>

          <div>
            <SavedJobs />
          </div>

          <div>
            <ResumeUploadForm />
          </div>

          <div>
            <ApplicationTracker />
          </div>
        </div>
      </div>
    </JobSeekerLayout>
  );
};

export default UserDashboard;
