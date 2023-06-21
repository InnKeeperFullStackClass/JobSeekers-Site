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
          </div>
        </div>

        <div className="container mx-auto mt-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <li
                key={resource.id}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <h3 className="text-lg font-semibold">{resource.title}</h3>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* Add more innovative information or links related to the resource */}
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto mt-8  mb-5">
          <div className="flex items-center">
            <input
              type="text"
              value={newResourceTitle}
              onChange={handleResourceTitleChange}
              placeholder="Enter a new resource title"
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleAddResource}
              className=" px-4 py-2 bg-[#006950] text-white rounded-r-md focus:outline-none hover:bg-blue-600"
            >
              Add Resource
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ResourcesPage;
