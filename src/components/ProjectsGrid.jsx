import { useMemo } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import { getCardLayout } from "../utils/scatter.js";
import { getLayoutCache, setLayoutCache } from "../utils/layoutMemory.js";

const FILTER_TAGS = {
  games: "Game",
  websites: "Website",
  apps: "App",
  simulations: "Simulation",
};

export default function ProjectsGrid({ filter }) {
  const filtered = useMemo(() => {
    const tag = FILTER_TAGS[filter];
    if (!tag) return projects;
    return projects.filter((p) => p.tags.includes(tag));
  }, [filter]);

  // Reuses the layout cached for this filter (so navigating back to Home
  // doesn't reshuffle the cards) unless App.jsx has cleared it because the
  // user just pressed this filter, in which case it's regenerated here.
  const cards = useMemo(() => {
    const cached = getLayoutCache(filter);
    if (cached) return cached;

    const generated = filtered.map((project, index) => ({
      project,
      layout: getCardLayout(index),
    }));
    setLayoutCache(filter, generated);
    return generated;
  }, [filtered, filter]);

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
