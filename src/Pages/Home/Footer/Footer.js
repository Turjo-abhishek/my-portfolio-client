import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-white bg-black rounded">
      <div className="grid grid-flow-col gap-4">
        <HashLink to="#about" className="link link-hover">
          About Me
        </HashLink>
        <HashLink to="#contact" className="link link-hover">
          Contact Me
        </HashLink>
        <HashLink to="#projects" className="link link-hover">
          Projects
        </HashLink>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Turjo-abhishek">
            <FaGithub
              className="text-3xl text-blue-700 hover:scale-110 duration-300"
              rel="noopener noreferrer"
            ></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-turjo-dash"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-teal-700 hover:scale-110 duration-300"></FaLinkedin>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Abhishek Turjo Dash</p>
      </div>
    </footer>
  );
};

export default Footer;
