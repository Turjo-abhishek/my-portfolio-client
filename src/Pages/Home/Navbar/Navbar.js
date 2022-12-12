import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import resume from "../../../Assets/Resume/Final_Resume_turjoAbhishek.pdf";

const Navbar = () => {
  return (
    <div className="navbar py-3 fixed top-0 bg-white shadow-2xl z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white"
          >
            <li>
              <a href={resume} className="btn btn-outline font-bold ">
                Download Resume
              </a>
            </li>
            <li>
              <Link to="/blogs" className="font-bold  hover:text-yellow-500">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/" className="font-bold  hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <HashLink
                smooth
                to="/#about"
                className="font-bold  hover:text-yellow-500"
              >
                About Me
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#projects"
                className="font-bold  hover:text-yellow-500"
              >
                My Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                className="font-bold  hover:text-yellow-500"
              >
                Contact Me
              </HashLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-lg font-bold">
          Abhishek Turjo Dash
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex p-2">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href={resume} className="btn btn-outline font-bold ">
              Download Resume
            </a>
          </li>
          <li>
            <Link to="/" className="font-bold  hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="font-bold  hover:text-yellow-500">
              Blogs
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="/#about"
              className="text-md font-bold hover:text-yellow-500"
            >
              About Me
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#projects"
              className="text-md font-bold hover:text-yellow-500"
            >
              My Projects
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#contact"
              className=" text-md font-bold hover:text-yellow-500"
            >
              Contact Me
            </HashLink>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
      </div> */}
    </div>
  );
};

export default Navbar;
