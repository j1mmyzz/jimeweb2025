"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

const ProjectCard: React.FC<{
  title: React.ReactNode;
  description: string;
}> = ({ title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-500 hover:scale-150"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-600">{description}</div>
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
            description="A small memory game created for my web devleopment class in high school."
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
            description="A simple HTML page devleoped for my internship at ETA Media, aimed to educate users on basic cybersecurity and online safety."
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
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
