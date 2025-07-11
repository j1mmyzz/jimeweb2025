"use client";

import { motion } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { Noto_Serif } from "next/font/google";

const noto_serif = Noto_Serif({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`${noto_serif.className} text-5xl font-bold mb-8`}>
            Jimmy Zheng
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className={`text-xl mb-8`}>
            Software Engineer | AI Enthusiast | Student
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center"
        >
          <p className="mb-9 text-lg sm:w-3/5 px-10 md:w-2/5">
            Hello, I&apos;m Jimmy! I&apos;m a Brooklyn based, self taught
            developer, and I am currently studying Computer Science at
            Binghamton University.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-32 flex flex-row justify-between animate-bounce">
            <a
              href="#skills"
              className="text-purple-700 rounded-full hover:scale-125 transition duration-300"
            >
              <FaArrowCircleDown className="text-4xl" />
            </a>
            <a
              href="mailto:jimmyzheng4459@gmail.com"
              className="text-purple-700 rounded-full hover:scale-125 transition duration-300"
            >
              <ImMail4 className="text-4xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
