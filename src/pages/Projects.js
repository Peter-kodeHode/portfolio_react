import React, { useState, useEffect } from "react";
import BlackJackImg from "../images/Projects/blackjack.png";
import SunnySideImg from "../images/Projects/sunnyside.png";
import FigmaImg from "../images/Projects/figma.png";
import AnimatedPage from "../globalComponents/AnimatedPage";
import GitHubImg from "../images/Footer/github.png";
import Footer from "../globalComponents/Footer";
import arrowdown from "../images/Home/arrow-down.svg";
import {
  PROJECTS_INTRODUCTION,
  PROJECT_BLACKJACK_DESCRIPTION,
  PROJECT_SUNNYSIDE_DESCRIPTION,
  PROJECT_FIGMA_DESCRIPTION,
  PROJECTS_MORE_COMING,
} from "../language_and_strings/no";

function Projects() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <AnimatedPage>
        <div className="projects">
          <h1>{PROJECTS_INTRODUCTION}</h1>
          <img className="arrow-down" src={arrowdown} alt="arrow down" />
        </div>

        <div className="projects">
          <div className={`dropdown ${activeDropdown === 0 ? "active" : ""}`}>
            <img
              className="greyimg"
              src={BlackJackImg}
              alt=""
              onClick={() => toggleDropdown(0)}
            />
            <div className="dropdown-content">
              <p>{PROJECT_BLACKJACK_DESCRIPTION}</p>
              <a
                className="github-link"
                href="https://github.com/Peter-kodeHode/blackjack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Se på Github{" "}
                <img className="github-img" src={GitHubImg} alt="Github logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="projects">
          <div className={`dropdown ${activeDropdown === 1 ? "active" : ""}`}>
            <img
              className="greyimg"
              src={SunnySideImg}
              alt=""
              onClick={() => toggleDropdown(1)}
            />
            <div className="dropdown-content">
              <p>
                {PROJECT_SUNNYSIDE_DESCRIPTION.split("Frontend Mentor")[0]}
                <a
                  href="https://www.frontendmentor.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend Mentor
                </a>
                {PROJECT_SUNNYSIDE_DESCRIPTION.split("Frontend Mentor")[1]}
              </p>
              <a
                className="github-link"
                href="https://github.com/Peter-kodeHode/sunnyside"
                target="_blank"
                rel="noopener noreferrer"
              >
                Se mer på Github{" "}
                <img className="github-img" src={GitHubImg} alt="Github logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="projects">
          <div className={`dropdown ${activeDropdown === 2 ? "active" : ""}`}>
            <img
              className="greyimg"
              src={FigmaImg}
              alt=""
              onClick={() => toggleDropdown(2)}
            />
            <div className="dropdown-content">
              <p>{PROJECT_FIGMA_DESCRIPTION}</p>
            </div>
          </div>
        </div>

        <div className="projects">
          <h1>{PROJECTS_MORE_COMING}</h1>
        </div>

        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Projects;
