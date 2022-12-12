import React from "react";
import dp from "../../../Assets/myphoto.jpg";
import resume from "../../../Assets/Resume/Final_Resume_turjoAbhishek.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg")`,
      }}
      className="container mx-auto pt-12"
    >
      <div className='bg-[#E5FBD7] bg-opacity-80 py-20'>
        <h1 className="pt-5 text-center tracking-wide font-extrabold text-2xl lg:text-5xl mb-6">
          HEY, I'M <span className="text-[#facf0f]"><Typewriter
            words={['ABHISHEK TURJO DASH', 'A FRONT END DEVELOPER', 'AN ENTHUSIASTIC LEARNER']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          /></span>
        </h1>
        <p className="text-gray-600 text-center text:xl lg:text-4xl font-bold w-2/3 mx-auto mb-5">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
          <div className="w-1/3 mx-auto mb-5">
            <img src={dp} alt="" style={{webkitFilter: "drop-shadow(5px 5px 5px #222)", filter: "drop-shadow(5px 5px 5px #222)"}} className="w-52 mx-auto rounded-full"/>
          </div>
          <div className="flex justify-center gap-10 mb-8">
                <a  href="https://github.com/Turjo-abhishek"><FaGithub className="text-3xl text-blue-700 hover:scale-110 duration-300" rel="noopener noreferrer"></FaGithub></a>
                <a href="https://www.linkedin.com/in/abhishek-turjo-dash" rel="noopener noreferrer"><FaLinkedin className="text-3xl text-teal-700 hover:scale-110 duration-300"></FaLinkedin></a>
          </div>
        <a href={resume} className="py-4 px-9 rounded-lg font-bold bg-[#facf0f] mx-auto w-32 transition ease-in-out hover:cursor-pointer hover:scale-110 duration-200 block">RESUME</a>
      </div>
    </div>
  );
};

export default Banner;
