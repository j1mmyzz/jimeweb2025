"use client";

import { motion } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-15"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-5xl font-bold mb-8">Jimmy Zheng</h1>
        <p className="text-xl mb-8">Web Developer | Designer | Student</p>
        <p className="mb-8 sm:w-3/5 px-10 md:w-2/5">
          Hello, I&apos;m Jimmy! I&apos;m a Brooklyn based, self taught
          developer, and I am currently studying Computer Science at Binghamton
          University.{" "}
        </p>
        <div className="w-32 flex flex-row justify-between animate-bounce">
          <a
            href="#skills"
            className="text-purple-600 rounded-full hover:scale-125 transition duration-300"
          >
            <FaArrowCircleDown className="text-4xl" />
          </a>
          <a
            href="mailto:jimmyzheng4459@gmail.com"
            className="text-purple-600 rounded-full hover:scale-125 transition duration-300"
          >
            <ImMail4 className="text-4xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
