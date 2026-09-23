import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>About me</h2>
      <p>
        Write a bit about yourself here — background, interests, what you're
        currently working on. Edit this in{" "}
        <code>src/components/AboutSection.jsx</code>.
      </p>
    </motion.section>
  );
}
