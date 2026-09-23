import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsGrid() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
