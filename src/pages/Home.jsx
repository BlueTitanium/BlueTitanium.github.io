import { useLayoutEffect } from "react";
import { motion } from "motion/react";
import FilterBar from "../components/FilterBar.jsx";
import ProjectsGrid from "../components/ProjectsGrid.jsx";
import AboutSection from "../components/AboutSection.jsx";
import { getHomeScroll, saveHomeScroll } from "../utils/scrollMemory.js";

export default function Home({ filter, onFilterChange }) {
  // Runs before paint so the jump back to the saved position isn't visible
  // as a flash-then-snap.
  useLayoutEffect(() => {
    window.scrollTo(0, getHomeScroll());

    function handleScroll() {
      saveHomeScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FilterBar value={filter} onChange={onFilterChange} />
      {filter === "about" ? (
        <AboutSection />
      ) : (
        <ProjectsGrid filter={filter} />
      )}
    </motion.div>
  );
}
