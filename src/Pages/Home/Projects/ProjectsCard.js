import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({project}) => {
  return (
    <div className="bg-white w-80 p-2 rounded-md border-2 border-gray-300">
      <div className="flex justify-center items-center leading-none">
        <img
          src={project.image}
          alt="pic"
          className=" w-full rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
        />
      </div>
      <div className="p-3">
        <p className="block mb-1 text-xl font-bold">{project.name}</p>
        <p className="mb-3 text-sm">{project.details}</p>
        <div className="flex justify-between">
            <Link to={`/projects/${project._id}`} className="border-2 py-2 px-4 rounded-lg font-semibold bg-[#facf0f]">View Details</Link>
            <a href={project.Live} className="border-2 py-2 px-4 rounded-lg font-semibold bg-blue-500">View Live</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
