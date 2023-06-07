import React, { useState } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import ResourcesHero from "../public/purposefulpath3.jpg";
import Image from "next/image";

const ResourcesPage = () => {
  const [resources, setResources] = useState([
    { id: 1, title: "Article 1" },
    { id: 2, title: "Guide 1" },
    { id: 3, title: "Tutorial 1" },
  ]);

  const [newResourceTitle, setNewResourceTitle] = useState("");

  const handleResourceTitleChange = (e) => {
    setNewResourceTitle(e.target.value);
  };

  const handleAddResource = () => {
    const newResource = {
      id: resources.length + 1,
      title: newResourceTitle,
    };
    setResources([...resources, newResource]);
    setNewResourceTitle("");
  };

  return (
    <DefaultLayout>
      <div>
        <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
          <Image
            className="absolute w-full h-full object-cover mix-blend-overlay"
            src={ResourcesHero}
            alt="home hero"
            priority
          />
          <div className="p-6 md:p-24 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
              Resources
            </h1>

            {/* <div className="flex justify-center mt-7">
              <Link href="/ContactUs">
                <button
                  className="px-6 mt-10 py-2 text-center hover:text-white hover:bg-[#0b2546] bg-white rounded-md mx-auto"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Get Free Consultation
                </button>
              </Link>
            </div> */}
          </div>
        </div>
        <ul>
          {resources.map((resource) => (
            <li key={resource.id}>{resource.title}</li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={newResourceTitle}
            onChange={handleResourceTitleChange}
          />
          <button onClick={handleAddResource}>Add Resource</button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ResourcesPage;
