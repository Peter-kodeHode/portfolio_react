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
        />
        <div className="dropdown-content">
          <p>{project.description}</p>
          {project.githubUrl && (
            <a
              className="github-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.githubText}
              <img className="github-img" src={GitHubImg} alt={ALT_TEXT.GITHUB_LOGO} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;