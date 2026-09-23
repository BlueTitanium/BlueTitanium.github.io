import { useParams, Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { motion } from "motion/react";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div>
        <p>Project not found.</p>
        <Link to="/">Back home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="project-detail"
    >
      <Link to="/">&larr; Back</Link>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <ul className="tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noreferrer">
        View project
      </a>
    </motion.div>
  );
}
