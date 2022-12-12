import React from "react";

const About = () => {
  return (
    <section className="bg-[#E5FBD7] pt-10" id="about">
      <h1 className="text-4xl font-bold text-center mb-7 text-blue-600">About Me</h1>
      <p className="text-center w-1/2 mx-auto text-xl text-gray-600 mb-10">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center ">
        <div className="w-2/3 my-10">
          <h1 className="text-3xl font-bold mb-7">Get to Know Me!</h1>
          <p className="text-xl my-5 text-justify">
            I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and
            Web Applications.
            Check out some of my work in the Projects section. <br /> I also like
            sharing content related to the stuff that I have learned over the
            years in Web Development. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </p>
        </div>
        <div className=" my-10">
          <h1 className="text-3xl font-bold mb-7">My skills</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              <p className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg py-3 px-5 text-center font-bold transition ease-in-out hover:from-pink-500 hover:to-yellow-500  hover:scale-110 duration-200">HTML</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg py-3 px-5 text-center font-bold transition ease-in-out hover:from-pink-500 hover:to-yellow-500  hover:scale-110 duration-200">CSS3</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg py-3 px-5 text-center font-bold transition ease-in-out  hover:from-pink-500 hover:to-yellow-500 hover:scale-110 duration-200">Bootstrap 5</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg py-3 px-5 text-center font-bold transition ease-in-out hover:from-pink-500 hover:to-yellow-500  hover:scale-110 duration-200">Tailwind CSS</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg py-3 px-5 text-center font-bold transition ease-in-out hover:from-pink-500 hover:to-yellow-500  hover:scale-110 duration-200">Javascript</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg py-3 px-5 text-center font-bold transition ease-in-out hover:from-pink-500 hover:to-yellow-500  hover:scale-110 duration-200">React.js</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg py-3 px-5 text-center font-bold transition ease-in-out hover:from-pink-500 hover:to-yellow-500  hover:scale-110 duration-200">Express.js</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg py-3 px-5 text-center font-bold transition ease-in-out hover:from-pink-500 hover:to-yellow-500  hover:scale-110 duration-200">MongoDb</p>
              <p className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg py-3 px-5 text-center font-bold transition ease-in-out hover:from-pink-500 hover:to-yellow-500  hover:scale-110 duration-200">Firebase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
