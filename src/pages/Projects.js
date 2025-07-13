import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/ui/PageHeader";
import ProjectCard from "../components/projects/ProjectCard/ProjectCard";
import { projectsData } from "../data/projectsData";
import { PROJECTS_TEXT } from "../language_and_strings/no";

function Projects() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Auto-focus the scroll container when component mounts
    if (pageRef.current) {
      pageRef.current.focus();
    }
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <PageLayout
      direction={location.state?.direction}
      pageRef={pageRef}
      className="projects-page"
    >
      <PageHeader
        title={PROJECTS_TEXT.INTRODUCTION}
        containerRef={pageRef}
        className="projects"
      />

      <section aria-label="Mine prosjekter - hold over eller klikk på bildene for å se detaljer">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeDropdown === index}
            onToggle={() => toggleDropdown(index)}
          />
        ))}
      </section>

      <div className="projects">
        <h1>{PROJECTS_TEXT.MORE_COMING}</h1>
      </div>
    </PageLayout>
  );
}

export default Projects;
