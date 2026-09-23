import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, description, image, tags }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link to={`/projects/${id}`}>
        <img src={image} alt={title} loading="lazy" />
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </Link>
    </motion.article>
  );
}
