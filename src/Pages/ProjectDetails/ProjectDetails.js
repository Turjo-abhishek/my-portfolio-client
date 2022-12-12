import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  const {
    name,
    details,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    features,
    technologies,
    Live,
    client,
    server,
  } = project;
  return (
    <section className="my-32">
      <p className="text-center text-2xl font-bold mb-3 text-amber-500">
        {name}
      </p>
      <p className="text-center text-md font-bold ">{details}</p>
      <div className="mt-7 grid grid-cols-1 place-items-center lg:grid-cols-3 w-2/3 lg:w-1/3 gap-3 lg:gap-0 mx-auto mb-10">
        <a href={Live}>
          <button className="py-2 px-7 rounded text-gray-100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-bold shadow-xl hover:-translate-y-1 hover:scale-110 duration-300">
            View Live
          </button>
        </a>
        <a href={client}>
          <button className=" py-2 px-6 text-blue-700 rounded bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 font-bold shadow-xl hover:-translate-y-1 hover:scale-110 duration-300">
            Client Repo
          </button>
        </a>
        <a href={server}>
          <button className=" py-2 px-6 text-green-100 rounded bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 font-bold shadow-xl hover:-translate-y-1 hover:scale-110 duration-300">
            Server Repo
          </button>
        </a>
      </div>

      <p className="text-center font-bold text-2xl">Screenshots</p>
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 -m-1 md:-m-2">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-1 md:p-2 lg:hover:scale-150 duration-300 lg:hover:z-20">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg "
                  src={img1}
                  style={{
                    webkitFilter: "drop-shadow(5px 5px 5px #222)",
                    filter: "drop-shadow(5px 5px 5px #222)",
                  }}
                />
              </div>
              <div className="w-full lg:w-1/2 p-1 md:p-2 lg:hover:scale-150 duration-300 lg:hover:z-20">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg "
                  src={img2}
                  style={{
                    webkitFilter: "drop-shadow(5px 5px 5px #222)",
                    filter: "drop-shadow(5px 5px 5px #222)",
                  }}
                />
              </div>
              <div className="w-full p-1 md:p-2 lg:hover:scale-150 duration-300 lg:hover:z-20">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg "
                  src={img3}
                  style={{
                    webkitFilter: "drop-shadow(5px 5px 5px #222)",
                    filter: "drop-shadow(5px 5px 5px #222)",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full p-1 md:p-2 hover:scale-150 duration-300 hover:z-20">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg "
                  src={img4}
                  style={{
                    webkitFilter: "drop-shadow(5px 5px 5px #222)",
                    filter: "drop-shadow(5px 5px 5px #222)",
                  }}
                />
              </div>
              <div className="w-full lg:w-1/2 p-1 md:p-2 lg:hover:scale-150 duration-300 lg:hover:z-20">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg "
                  src={img5}
                  style={{
                    webkitFilter: "drop-shadow(5px 5px 5px #222)",
                    filter: "drop-shadow(5px 5px 5px #222)",
                  }}
                />
              </div>
              {img6 && (
                <div className="w-full lg:w-1/2 p-1 md:p-2 lg:hover:scale-150 duration-300 lg:hover:z-20">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg "
                    src={img6}
                    style={{
                      webkitFilter: "drop-shadow(5px 5px 5px #222)",
                      filter: "drop-shadow(5px 5px 5px #222)",
                    }}
                  />
                </div>
              )}
              {img7 && (
                <div className="w-full lg:w-1/2 p-1 md:p-2 lg:hover:scale-150 duration-300 lg:hover:z-20">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg "
                    src={img7}
                    style={{
                      webkitFilter: "drop-shadow(5px 5px 5px #222)",
                      filter: "drop-shadow(5px 5px 5px #222)",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 grid grid-cols-1 w-2/3 mx-auto lg:grid-cols-2 gap-4 lg:place-items-center">
        <div>
          <p className="text-2xl font-bold ">Features</p>
          {features.map((feature, i) => (
            <p key={i}># {feature}</p>
          ))}
        </div>
        <div>
          <p className="text-2xl font-bold ">Technologies Used</p>
          {technologies.map((technology, i) => (
            <p key={i}># {technology}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
