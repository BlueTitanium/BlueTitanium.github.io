import { useState } from "react";
import { motion } from "motion/react";
import Lightbox from "./Lightbox.jsx";

const SPRING = { type: "spring", stiffness: 350, damping: 15 };

const PHOTO = {
  src: "/assets/about-photo.webp",
  alt: "Taneim smiling at the camera, wearing round black glasses and a beige short-sleeve shirt, in front of shelves of vintage matchbox art",
};

export default function AboutSection() {
  const [lightboxImage, setLightboxImage] = useState(null);

  // The Lightbox is a sibling of the section (not a child) because the
  // section's entrance transform would otherwise become the containing block
  // for the lightbox's position: fixed backdrop.
  return (
    <>
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.button
        type="button"
        className="about-photo"
        onClick={() => setLightboxImage(PHOTO)}
        aria-label={`Zoom in on ${PHOTO.alt}`}
        whileHover={{ scale: 1.03 }}
        transition={SPRING}
      >
        <img src={PHOTO.src} alt={PHOTO.alt} />
      </motion.button>
      <div className="about-text">
        <h2>About me</h2>
        <p>Hi! I'm Taneim Miah, a software developer based in New York City!</p>
        <p>
          My main goals in life involve creating things. As a developer and
          designer, I truly love to see my creations come to life and see my
          designs and architecture work as planned.
        </p>
        <p>
          My hobbies include: Sewing, bouldering, drawing, programming, video
          games (playing and making!). I love learning new things and making new
          projects all the time.
        </p>
        <br></br>
        <p className="about-note">
          FYI: Not all of my projects are listed in this website. If you'd like to see more, please check out the github and itch.io pages with the social links at the bottom.
        </p>
      </div>
    </motion.section>
    <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}
