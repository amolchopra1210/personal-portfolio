import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, showNav] = useState(false);
  const handleClick = () => showNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* menu */}
      <ul className="w-full hidden md:flex md:justify-center">
        <li>
          <Link to="home" offset={25} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" offset={25} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" offset={-60} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" offset={25} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" offset={-75} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            offset={25}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            offset={25}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            offset={-60}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            offset={25}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            offset={-75}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="pr-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/amolchopra/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="pr-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/amolchopra1210/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="pr-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:amolchopra1210@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="pr-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1CxZ8P7m05w9bZlYRenGgHsYukHbHnCW5/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
