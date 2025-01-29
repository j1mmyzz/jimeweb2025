"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillCard: React.FC<{
  title: string;
  description: string;
  direction: string;
}> = ({ title, description, direction }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard
            title="Web Development"
            description="Proficient in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS"
            direction="left"
          />
          <SkillCard
            title="App Development"
            description="Experience with Python, Flask, Java, and Java-Swing"
            direction="right"
          />
          <SkillCard
            title="Design"
            description="Skilled in UI/UX design and Figma"
            direction="left"
          />
          <SkillCard
            title="Backend Development"
            description="Familiar with Node.js, and SQL"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
