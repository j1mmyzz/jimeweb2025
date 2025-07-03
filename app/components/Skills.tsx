"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiCanva, SiChakraui, SiFlask, SiMysql } from "react-icons/si";
import {
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaPython,
  FaFigma,
  FaNodeJs,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const SkillCard: React.FC<{
  title: string;
  description: string;
  direction: string;
  icons: React.ReactNode;
}> = ({ title, description, direction, icons }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -300 : 300 }}
      whileInView={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.25 }}
      className="bg-slate-950 p-6 rounded-2xl shadow-md border border-gray-100"
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <div className="flex flex-row items-center text-2xl space-x-3">
        {icons}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 text-white">
          <SkillCard
            title="Web Development"
            description="Proficient in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS"
            direction="left"
            icons={
              <div className="flex flex-row items-center space-x-4">
                <FaHtml5 className="text-orange-600 text-2xl hover:scale-125" />
                <FaCss3 className="text-blue-500 text-2xl hover:scale-125" />
                <BiLogoJavascript className="text-yellow-500 text-2xl hover:scale-125" />
                <FaReact className="text-blue-500 text-2xl hover:scale-125" />
                <RiNextjsFill className="text-white text-2xl hover:scale-125" />
                <RiTailwindCssFill className="text-cyan-500 text-2xl hover:scale-125" />
                <SiChakraui className="text-teal-500 text-2xl hover:scale-125" />
              </div>
            }
          />
          <SkillCard
            title="App Development"
            description="Experience with Python, Flask, Java, Java-Swing and Git"
            direction="right"
            icons={
              <div className="flex flex-row items-center space-x-4">
                <FaPython className="text-blue-500 text-2xl hover:scale-125" />
                <SiFlask className="text-white text-2xl hover:scale-125" />
                <FaJava className="text-orange-500 text-2xl hover:scale-125" />
                <FaGitAlt className="text-orange-500 text-2xl hover:scale-125" />
              </div>
            }
          />
          <SkillCard
            title="Design"
            description="Skilled in UI/UX design and Figma"
            direction="left"
            icons={
              <div className="flex flex-row items-center space-x-4">
                <FaFigma className="text-white text-2xl hover:scale-125" />
                <SiCanva className="text-cyan-500 text-2xl hover:scale-125" />
              </div>
            }
          />
          <SkillCard
            title="Backend Development"
            description="Familiar with Node.js, SQL, Linux, and Firebase"
            direction="right"
            icons={
              <div className="flex flex-row items-center space-x-4">
                <FaNodeJs className="text-green-600 text-2xl hover:scale-125" />
                <SiMysql className="text-blue-500 text-2xl hover:scale-125" />
                <FaLinux className="text-white text-2xl hover:scale-125" />
                <IoLogoFirebase className="text-orange-500 text-2xl hover:scale-125" />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
