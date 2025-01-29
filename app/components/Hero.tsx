"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Jimmy Zheng</h1>
        <p className="text-xl mb-8">Web Developer | Designer | Student</p>
        <a
          href="#skills"
          className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Explore My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
