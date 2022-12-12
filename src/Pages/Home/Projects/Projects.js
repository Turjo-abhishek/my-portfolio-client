import React, { useEffect, useState } from 'react';
// import img1 from "../../../Assets/projects/learners-hub.PNG";
// import img2 from "../../../Assets/projects/turjos photography.PNG";
// import img3 from "../../../Assets/projects/vehicles-zone2.PNG";
import ProjectsCard from './ProjectsCard';

// const projects = [
//     {
//         id: 1,
//         image: img1,
//         name: "Learner's Hub",
//         details: "An online platform educational website",
//         Live: "https://learners-hub-client-30963.web.app/"
//     },
//     {
//         id: 2,
//         image: img2,
//         name: "Turjo's Photography",
//         details: "A photographers portfolio website",
//         Live: "https://turjos-photography-asnmnt11.web.app/"
//     },
//     {
//         id: 3,
//         image: img3,
//         name: "Vehicles Zone",
//         details: "A second hand vehicle selling website",
//         Live: "https://vehicles-zone.web.app/"
//     }
// ]



const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("https://my-portfolio-server-azure.vercel.app/projects")
        .then(res => res.json())
        .then(data => {
            setProjects(data);
        })
    },[])

    return (
        <section className="px-20 my-10" id='projects'>
      <h1 className="text-4xl font-bold text-center mb-7 text-[#facf0f]">My Projects</h1>
      <p className="text-center w-1/2 mx-auto text-xl text-gray-600 mb-10">
      Here you will find some of the projects that I created with each project containing its own case study
      </p>
      <div className=" grid place-items-center grid-cols-1 lg:grid-cols-3 font-mono py-10 gap-5">
        {projects.map(project => <ProjectsCard key={project._id} project={project}></ProjectsCard>)}
    </div>
    </section>
    );
};

export default Projects;