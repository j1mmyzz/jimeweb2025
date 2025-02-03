"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const ExperienceItem: React.FC<{
  title: string;
  company: string;
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
        <div className="max-w-2xl mx-auto">
          <ExperienceItem
            title="Financial Automation Analyst Intern"
            company="Morgan Stanley"
            period="Feb 2024 - Jun 2024"
            description="
            During my time at Morgan Stanley, I was on the U.S. Banks Finance team. I devleoped excel macros using Visual Basics for applications, a language I've never even heard of before my project. My macro is still being used to this day saving manual labor. I also participated in the global company hackathon placing 2nd while at the same time getting an Alteryx Designer Certification. I also did a lot of data analysis and cross-verifying information from Alteryx and manual excel files."
          />
          <ExperienceItem
            title="Software Engineer Intern"
            company="NYC Public Schools, Software Engineer Intern"
            period="Jul 2023 - Sep 2023"
            description="
            I was on the Enterprise Management Services team at NYC Public Schools (Prev. NYC Department of Education). I mainly worked on 
            one big project. I redesigned and modernized the network operations center team website using TypeScript and Next.js. There are built in tools
            I made like a CSV reader using TypeScript which would display the data using Tailwind CSS. I also got security engineering training through ISC^2 and under professional mentorship."
          />
          <ExperienceItem
            title="Intern"
            company="ETA Media"
            period="Feb 2023 - May 2023"
            description="
            I was one of several interns at ETA Media where I led a team to design and develop a cyber security web application game that simulates real-life cyber threats. We also conducted focus groups and surveys to gather data from 350+ individuals to identify key trends. I also collaborated with internal teams to engage and educate clients on common cyber security threats"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
