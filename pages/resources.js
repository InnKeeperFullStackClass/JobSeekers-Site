import React, { useState } from "react";
import DefaultLayout from "@/layout/DefaultLayout";

const ResourcesPage = () => {
  const [resources, setResources] = useState([
    { id: 1, title: "Article 1" },
    { id: 2, title: "Guide 1" },
    { id: 3, title: "Tutorial 1" },
  ]);

  return (
    <DefaultLayout>
      <div>
        <h1>Resources</h1>
        <ul>
          {resources.map((resource) => (
            <li key={resource.id}>{resource.title}</li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};

export default ResourcesPage;
