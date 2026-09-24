import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, thumbnail, year, aspectRatio, style }) {
  return (
    <motion.div
      className="project-scatter-item"
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        scale: { type: "spring", stiffness: 350, damping: 15 },
      }}
    >
      <Link to={`/projects/${id}`} className="project-card">
        <div className="project-card-media" style={{ aspectRatio }}>
          <img src={thumbnail.src} alt={thumbnail.alt} loading="lazy" />
        </div>
        <p className="project-card-caption">
          {title}, {year}
        </p>
      </Link>
    </motion.div>
  );
}
