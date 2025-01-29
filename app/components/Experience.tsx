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
      <p className="text-purple-600">{company}</p>
      <p className="text-sm text-gray-600 mb-2">{period}</p>
      <p>{description}</p>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-2xl mx-auto">
          <ExperienceItem
            title="Financial Automation Analyst Intern"
            company="Morgan Stanley"
            period="Feb 2024 - Jun 2024"
            description="● Developed Excel macros using VBA, automating processes, saving my team 10+ hours of labor each week
● Participated in a global company hackathon using Alteryx coming in 2nd and became Alteryx Core Certified
● Cross-verified outputs generated from Alteryx Designer with manual data, ensuring accuracy & consistency"
          />
          <ExperienceItem
            title="Software Engineer Intern"
            company="NYC Public Schools, Software Engineer Intern"
            period="Jul 2023 - Sep 2023"
            description="● Modernized outdated internal network sites using TypeScript and Next.js for the network operations center team
● Implemented a CSV reader using TypeScript, displaying UI using Tailwind CSS, saving ~2 hours of coding
● Collaborated with a team on VPN Auditing projects for remote access into schools’ networks using Cisco ISE"
          />
          <ExperienceItem
            title="Intern"
            company="ETA Media"
            period="Feb 2023 - May 2023"
            description="● Led a team to design and develop a cyber security web application game that simulates real-life cyber threats
  ● Conducted focus groups and surveys to gather data from 350+ individuals to identify key trends
  ● Collaborated with internal teams to engage and educate clients on common cyber security threats"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
