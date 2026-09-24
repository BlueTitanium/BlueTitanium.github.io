import { motion } from "motion/react";

const SPRING = { type: "spring", stiffness: 350, damping: 15 };

function ZoomableImage({ image, onZoom }) {
  return (
    <motion.button
      type="button"
      className="project-detail-image"
      onClick={() => onZoom(image)}
      aria-label={`Zoom in on ${image.alt}`}
      whileHover={{ scale: 1.03 }}
      transition={SPRING}
    >
      <img src={image.src} alt={image.alt} />
    </motion.button>
  );
}

export default function ProjectLayoutBlock({ block, onZoomImage }) {
  switch (block.layoutType) {
    case "imageDescriptionPair":
      return (
        <div className="project-detail-pair project-detail-pair--image">
          <ZoomableImage image={block.image} onZoom={onZoomImage} />
          <p className="project-detail-text">{block.description}</p>
        </div>
      );

    case "headerDescriptionPair":
      return (
        <div className="project-detail-pair">
          <h2 className="project-detail-pair-header">{block.header}</h2>
          <p className="project-detail-text">{block.description}</p>
        </div>
      );

    case "fullWidthImage":
      return <ZoomableImage image={block.image} onZoom={onZoomImage} />;

    case "description":
      return <p className="project-detail-text">{block.description}</p>;

    case "whitespace":
      return (
        <div
          className={`project-detail-whitespace project-detail-whitespace--${block.size || "medium"}`}
          aria-hidden="true"
        />
      );

    case "video":
      return (
        <div className="project-detail-video">
          <iframe
            src={block.url}
            title="Project video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );

    default:
      return null;
  }
}
