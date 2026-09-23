import { useState } from "react";
import { motion } from "motion/react";
import FilterBar from "../components/FilterBar.jsx";
import ProjectsGrid from "../components/ProjectsGrid.jsx";
import AboutSection from "../components/AboutSection.jsx";

export default function Home() {
  const [filter, setFilter] = useState("all");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FilterBar value={filter} onChange={setFilter} />
      {filter === "about" ? (
        <AboutSection />
      ) : (
        <ProjectsGrid filter={filter} />
      )}
    </motion.div>
  );
}
