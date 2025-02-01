"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { SiChakraui } from "react-icons/si";
import { FaGithub, FaJava, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const ProjectCard: React.FC<{
  title: React.ReactNode;
  description: string;
  languagesAndGithub: React.ReactNode;
}> = ({ title, description, languagesAndGithub }) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-600 mb-4">{description}</div>
        <div className="flex flex-row items-center text-2xl space-x-3">
          {languagesAndGithub}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title={
              <span>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer no-underline hover:underline ..."
                >
                  Personal Portfolio
                </Link>
              </span>
            }
            description="A personal website showcasing my skills and projects! You are viewing right now :)."
            languagesAndGithub={
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-4">
                  <FaReact className="text-blue-500 text-2xl hover:scale-125" />

                  <RiNextjsFill className="text-black text-2xl hover:scale-125" />
                  <RiTailwindCssFill className="text-cyan-500 text-2xl hover:scale-125" />
                </div>
                <a
                  href="https://github.com/j1mmyzz/jimeweb2025"
                  target="_blank"
                >
                  <FaGithub className="text-black text-2xl hover:scale-125" />
                </a>
              </div>
            }
          />

          <ProjectCard
            title={
              <span>
                <a
                  className="no-underline hover:underline ..."
                  href="https://jimematch.vercel.app/"
                  target="_blank"
                >
                  Memory Match
                </a>
              </span>
            }
            description="A small memory game created for my web development class in high school."
            languagesAndGithub={
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-4">
                  <BiLogoJavascript className="text-yellow-500 text-2xl hover:scale-125" />
                  <FaHtml5 className="text-orange-600 text-2xl hover:scale-125" />
                  <FaCss3 className="text-blue-500 text-2xl hover:scale-125" />
                </div>
                <a
                  href="https://github.com/j1mmyzz/Memory-Match"
                  target="_blank"
                >
                  <FaGithub className="text-black text-2xl hover:scale-125" />
                </a>
              </div>
            }
          />

          <ProjectCard
            title={
              <span>
                <a className="no-underline hover:underline ..." target="_blank">
                  NOC-NYCBOE
                </a>
              </span>
            }
            description="The official homepage for the Enterprise Management Team at NYC Public Schools (Prev. NYC DOE)."
            languagesAndGithub={
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-4">
                  <FaReact className="text-blue-500 text-2xl hover:scale-125" />
                  <RiNextjsFill className="text-black text-2xl hover:scale-125" />
                  <RiTailwindCssFill className="text-cyan-500 text-2xl hover:scale-125" />
                  <SiChakraui className="text-teal-500 text-2xl hover:scale-125" />
                </div>
                <a href="https://github.com/j1mmyzz/noc-nycboe" target="_blank">
                  <FaGithub className="text-black text-2xl hover:scale-125" />
                </a>
              </div>
            }
          />

          <ProjectCard
            title={
              <span>
                <a
                  className="no-underline hover:underline ..."
                  href="https://empire-cybersecurity-game.vercel.app/"
                  target="_blank"
                >
                  Empire Cybersecurity Game
                </a>
              </span>
            }
            description="A simple HTML page developed for my internship at ETA Media, aimed to educate users on basic cybersecurity and online safety."
            languagesAndGithub={
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-4">
                  <BiLogoJavascript className="text-yellow-500 text-2xl hover:scale-125" />
                  <FaHtml5 className="text-orange-600 text-2xl hover:scale-125" />
                  <FaCss3 className="text-blue-500 text-2xl hover:scale-125" />
                </div>
                <a
                  href="https://github.com/j1mmyzz/Empire-Cybersecurity-Game"
                  target="_blank"
                >
                  <FaGithub className="text-black text-2xl hover:scale-125" />
                </a>
              </div>
            }
          />

          <ProjectCard
            title={
              <span>
                <a
                  className="no-underline hover:underline ..."
                  href="https://jimebird.vercel.app/"
                  target="_blank"
                >
                  JimeBird
                </a>
              </span>
            }
            description="Small project created while learning JavaScript. You get access to a very small bird catalog."
            languagesAndGithub={
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-4">
                  <BiLogoJavascript className="text-yellow-500 text-2xl hover:scale-125" />
                  <FaHtml5 className="text-orange-600 text-2xl hover:scale-125" />
                  <FaCss3 className="text-blue-500 text-2xl hover:scale-125" />
                </div>
                <a href="https://github.com/j1mmyzz/JimeBird" target="_blank">
                  <FaGithub className="text-black text-2xl hover:scale-125" />
                </a>
              </div>
            }
          />

          <ProjectCard
            title={
              <span>
                <a className="no-underline hover:underline ..." target="_blank">
                  Maze Pathfinding GUI
                </a>
              </span>
            }
            description="My AP CSA Final Project. It's a Java program that generates a maze and finds the optimal path to solve it. The program uses Dijkstra's and A* algorithms to find the optimal path."
            languagesAndGithub={
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-4">
                  <FaJava className="text-orange-500 text-2xl hover:scale-125" />{" "}
                </div>
                <a
                  href="https://github.com/j1mmyzz/PathfindingGUI"
                  target="_blank"
                >
                  <FaGithub className="text-black text-2xl hover:scale-125" />
                </a>
              </div>
            }
          />

          <ProjectCard
            title={
              <span>
                <a
                  className="no-underline hover:underline ..."
                  href="https://nutrifit.vercel.app/"
                  target="_blank"
                >
                  Nutrifit
                </a>
              </span>
            }
            description="A responsive webpage designed to help users organize their lives through nutritional recipes and workout plans. TechCodes Hackathon Submission."
            languagesAndGithub={
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-4">
                  <FaReact className="text-blue-500 text-2xl hover:scale-125" />
                  <RiNextjsFill className="text-black text-2xl hover:scale-125" />
                  <RiTailwindCssFill className="text-cyan-500 text-2xl hover:scale-125" />
                  <SiChakraui className="text-teal-500 text-2xl hover:scale-125" />
                </div>
                <a href="https://github.com/fe-i/nutrifit" target="_blank">
                  <FaGithub className="text-black text-2xl hover:scale-125" />
                </a>
              </div>
            }
          />

          <ProjectCard
            title={
              <span>
                <a className="no-underline hover:underline ..." target="_blank">
                  Restaurant Ordering App
                </a>
              </span>
            }
            description="Simple restaurant app created using Java Swing."
            languagesAndGithub={
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-4">
                  <FaJava className="text-orange-500 text-2xl hover:scale-125" />{" "}
                </div>
                <a
                  href="https://github.com/j1mmyzz/RestaurantOrderingApp"
                  target="_blank"
                >
                  <FaGithub className="text-black text-2xl hover:scale-125" />
                </a>
              </div>
            }
          />

          <ProjectCard
            title={
              <span>
                <a className="no-underline hover:underline ..." target="_blank">
                  Vegetables Vs. Mummies
                </a>
              </span>
            }
            description="Plants Vs. Zombies clone made with Java Swing."
            languagesAndGithub={
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center space-x-4">
                  <FaJava className="text-orange-500 text-2xl hover:scale-125" />{" "}
                </div>
                <a
                  href="https://github.com/j1mmyzz/VegetablesVsMummies"
                  target="_blank"
                >
                  <FaGithub className="text-black text-2xl hover:scale-125" />
                </a>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
