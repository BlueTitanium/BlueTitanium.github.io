import { motion } from "motion/react";
import ProjectsGrid from "../components/ProjectsGrid.jsx";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="hero">
        <h1>Hi, I'm Taneim.</h1>
        <p>I build things.</p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <ProjectsGrid />
      </section>
    </motion.div>
  );
}
