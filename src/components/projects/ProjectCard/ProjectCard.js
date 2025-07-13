import React from 'react';
import GitHubImg from "../../../images/Footer/github.svg";
import "./ProjectCard.css";
import { ALT_TEXT } from '../../../language_and_strings/no';

const ProjectCard = ({ project, isActive, onToggle }) => {
  return (
    <div className="projects">
      <div className={`dropdown ${isActive ? "active" : ""}`}>
        <img
          className="greyimg"
          src={project.image}
          alt={project.alt}
          onClick={onToggle}
          role="button"
          tabIndex="0"
          aria-expanded={isActive}
          aria-label={`${project.alt} - ${isActive ? 'skjul' : 'vis'} prosjektdetaljer`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggle();
            }
          }}
        />
        <div 
          className="dropdown-content"
          aria-hidden={!isActive}
          role="region"
          aria-labelledby={`project-${project.id}-title`}
        >
          <p id={`project-${project.id}-title`}>{project.description}</p>
          {project.githubUrl && (
            <a
              className="github-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.githubText} for ${project.alt} - åpnes i ny fane`}
            >
              {project.githubText}
              <img 
                className="github-img" 
                src={GitHubImg} 
                alt={ALT_TEXT.GITHUB_LOGO} 
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;