"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-purple-800 text-white shadow-md"
          : "bg-transparent text-purple-900"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold cursor-pointer"
          >
            Jimmy Zheng
          </Link>
          <div className="flex space-x-6">
            {/* <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-purple-300">
              Home
            </Link> */}
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-purple-300"
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-purple-300"
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-purple-300"
            >
              Projects
            </Link>
            <a
              href="https://drive.google.com/file/d/1h-WT08z5IdUqxzDKr8aivj8WeeKyQObR/view"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
