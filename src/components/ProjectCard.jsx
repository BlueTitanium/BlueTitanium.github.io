import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, image, year, aspectRatio, style }) {
  return (
    <motion.div
      className="project-scatter-item"
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link to={`/projects/${id}`} className="project-card">
        <div className="project-card-media" style={{ aspectRatio }}>
          <img src={image} alt={title} loading="lazy" />
        </div>
        <p className="project-card-caption">
          {title}, {year}
        </p>
      </Link>
    </motion.div>
  );
}
