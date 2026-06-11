"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const ExperienceItem: React.FC<{
  title: string;
  company: React.ReactNode;
  period: string;
  description: string;
}> = ({ title, company, period, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-purple-700">{company}</p>
      <p className="text-sm text-gray-300 mb-2">{period}</p>
      <p>{description}</p>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div>
          <div className="max-w-2xl mx-auto">
            <ExperienceItem
              title="AI/ML Ignite Fellow"
              company={<a className="hover:underline">AI4ALL</a>}
              period="May 2026 - Present"
              description="Experience with Scikit-learn, Matplotlib, Numpy, and Pandas libraries"
            />
            <ExperienceItem
              title="Software Engineer Intern"
              company={
                <a className="hover:underline">
                  Binghamton University Information Technology Services
                </a>
              }
              period="May 2026 - Present"
              description="Redesinging and writing new scripts for students' course registration. Refactoring KShell and Oracle SQL packages into Python for better performance. I'm also working on the parking system for the university for all staff and students."
            />
            <ExperienceItem
              title="AI Fellow"
              company={<a className="hover:underline">Handshake</a>}
              period="Apr 2026 - Present"
              description="Designing structured prompt-rubric pairs targeting complex tasks, generating training data to guide reinforcement learning and auditing LLM performance through RLHF prompt engineering, hand annotation of responses, and analysis of model outputs."
            />
            <ExperienceItem
              title="Private STEM Tutor"
              company={<a className="hover:underline">Private Client</a>}
              period="Dec 2025 - Present"
              description="As a private STEM tutor, I work with students to improve their critical thinking and problem solving skills. I teach a wide range of subjects from algebra 1 to AP Calculus BC. I also teach a course in Minecraft Education with in-game blocked based coding."
            />
            <ExperienceItem
              title="Software Development Intern"
              company={
                <a
                  className="hover:underline"
                  href="https://www.privateequityinternational.com/institution-profiles/divino-global-holdings.html"
                  target="_blank"
                >
                  Divino Global Holdings LLC
                </a>
              }
              period="Jun 2025 - Aug 2025"
              description="At Divino I developed a Python app to efficiently extract and validate 500+ company email formats using web scraping and Apollo’s API. I also conducted in-depth research on VC firms, hedge funds, and other funding sources by leveraging AI to gather and analyze data."
            />
            <ExperienceItem
              title="STEM Tutor"
              company={
                <a
                  className="hover:underline"
                  href="https://argoprep.com/"
                  target="_blank"
                >
                  ArgoPrep
                </a>
              }
              period="Jul 2024 - Aug 2024"
              description="At ArgoPrep, I was able to work with many other teachers and tutors, building my teamwork skills. I taught a class of ~12 students programming primarily in Minecraft, teaching important coding concepts like loops and functions. There was also a week where I worked with a small team to come up with business strategies in order to market our school to a wider audience."
            />
            <ExperienceItem
              title="Financial Automation Analyst Intern"
              company={
                <a
                  className="hover:underline"
                  href="https://www.morganstanley.com/"
                  target="_blank"
                >
                  Morgan Stanley
                </a>
              }
              period="Feb 2024 - Jun 2024"
              description="
            During my time at Morgan Stanley, I was on the U.S. Banks Finance team. I devleoped excel macros using Visual Basics for applications, a language I've never even heard of before my project. My macro is still being used to this day saving manual labor. I also participated in the global company hackathon placing 2nd while at the same time getting an Alteryx Designer Certification. I also did a lot of data analysis and cross-verifying information from Alteryx and manual excel files."
            />
            <ExperienceItem
              title="Software Engineer Intern"
              company={
                <a
                  className="hover:underline"
                  href="https://www.schools.nyc.gov/"
                  target="_blank"
                >
                  NYC Public Schools
                </a>
              }
              period="Jul 2023 - Sep 2023"
              description="
            I was on the Enterprise Management Services team at NYC Public Schools (Prev. NYC Department of Education). I mainly worked on 
            one big project. I redesigned and modernized the network operations center team website using TypeScript and Next.js. There are built in tools
            I made like a CSV reader using TypeScript which would display the data using Tailwind CSS. I also got security engineering training through ISC^2 and under professional mentorship."
            />
            <ExperienceItem
              title="Intern"
              company={
                <a
                  className="hover:underline"
                  href="https://etamedia.com/"
                  target="_blank"
                >
                  ETA Media
                </a>
              }
              period="Feb 2023 - May 2023"
              description="
            I was one of several interns at ETA Media where I led a team to design and develop a cyber security web application game that simulates real-life cyber threats. We also conducted focus groups and surveys to gather data from 350+ individuals to identify key trends. I also collaborated with internal teams to engage and educate clients on common cyber security threats"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
