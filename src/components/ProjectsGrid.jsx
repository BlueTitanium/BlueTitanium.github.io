import { useMemo } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import { getCardLayout } from "../utils/scatter.js";

const FILTER_TAGS = {
  games: "Game",
  websites: "Website",
  apps: "App",
};

export default function ProjectsGrid({ filter }) {
  const filtered = useMemo(() => {
    const tag = FILTER_TAGS[filter];
    if (!tag) return projects;
    return projects.filter((p) => p.tags.includes(tag));
  }, [filter]);

  // Re-rolled every time the filtered list changes (i.e. on mount and on
  // every filter switch), but stable across unrelated re-renders in between.
  const cards = useMemo(
    () =>
      filtered.map((project, index) => ({
        project,
        layout: getCardLayout(index),
      })),
    [filtered]
  );

  return (
    <div className="project-scatter">
      {cards.map(({ project, layout }) => (
        <ProjectCard
          key={project.id}
          {...project}
          aspectRatio={layout.aspectRatio}
          style={{
            width: `${layout.width}px`,
            maxWidth: "90%",
            marginLeft: `${layout.offsetPercent}%`,
          }}
        />
      ))}
    </div>
  );
}
