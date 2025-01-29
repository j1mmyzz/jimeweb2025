"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

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
          <div className="hidden md:flex space-x-6">
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
              className="cursor-pointer hover:text-purple-300"
              href="https://drive.google.com/file/d/1h-WT08z5IdUqxzDKr8aivj8WeeKyQObR/view"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-purple-800 text-white"
          >
            <div className="container mx-auto px-6 py-4">
              <motion.div variants={menuItemVariants}>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer hover:text-purple-300"
                  onClick={toggleMenu}
                >
                  Skills
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer hover:text-purple-300"
                  onClick={toggleMenu}
                >
                  Experience
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer hover:text-purple-300"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <a
                  className="block py-2 cursor-pointer hover:text-purple-300"
                  href="https://drive.google.com/file/d/1h-WT08z5IdUqxzDKr8aivj8WeeKyQObR/view"
                  target="_blank"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
