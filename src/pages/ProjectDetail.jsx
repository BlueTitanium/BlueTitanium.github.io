import { useParams, Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { motion } from "motion/react";
import { projects } from "../data/projects.js";
import Lightbox from "../components/Lightbox.jsx";

const SPRING = { type: "spring", stiffness: 350, damping: 15 };

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxImage, setLightboxImage] = useState(null);

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

  const { title, images, descriptions, tags, link, year, video } = project;
  const [thumbnail, ...bodyImages] = images;
  const [summary, ...bodyDescriptions] = descriptions;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="project-detail"
    >
      <motion.span
        className="back-link"
        whileHover={{ scale: 1.05 }}
        transition={SPRING}
      >
        <Link to="/">&larr; Back</Link>
      </motion.span>

      <div className="project-detail-header">
        <motion.button
          type="button"
          className="project-detail-thumb"
          onClick={() => setLightboxImage(thumbnail)}
          aria-label={`Zoom in on ${thumbnail.alt}`}
          whileHover={{ scale: 1.03 }}
          transition={SPRING}
        >
          <img src={thumbnail.src} alt={thumbnail.alt} />
        </motion.button>
        <div className="project-detail-info">
          <h1>
            {title}
            {year ? `, ${year}` : ""}
          </h1>
          <ul className="tags">
            {tags.map((tag) => (
              <motion.li
                key={tag}
                whileHover={{ scale: 1.1 }}
                transition={SPRING}
              >
                {tag}
              </motion.li>
            ))}
          </ul>
          <p className="project-detail-summary">{summary}</p>
          <motion.a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="project-link-button"
            whileHover={{ scale: 1.04 }}
            transition={SPRING}
          >
            Project Link
          </motion.a>
        </div>
      </div>

      <div className="project-detail-body">
        {bodyDescriptions.map((desc, index) => {
          const image = bodyImages[index];
          return (
            <div className="project-detail-block" key={index}>
              <p>{desc}</p>
              {image && (
                <motion.button
                  type="button"
                  className="project-detail-image"
                  onClick={() => setLightboxImage(image)}
                  aria-label={`Zoom in on ${image.alt}`}
                  whileHover={{ scale: 1.03 }}
                  transition={SPRING}
                >
                  <img src={image.src} alt={image.alt} />
                </motion.button>
              )}
            </div>
          );
        })}
      </div>

      {video && (
        <div className="project-detail-video">
          <iframe
            src={video}
            title={`${title} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </motion.div>
  );
}
