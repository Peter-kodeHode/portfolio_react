import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import PoddinFace from "../images/Home/poddinfacerealvector.png";
import CodeImg from "../images/Home/code.svg";
import HideArrowDown from "../components/ui/HideArrowDown";
import PageLayout from "../components/layout/PageLayout";
import { HOME_TEXT, ALT_TEXT } from "../language_and_strings/no";

function Home() {
  const homePageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Auto-focus the scroll container when component mounts
    if (homePageRef.current) {
      homePageRef.current.focus();
    }
  }, []);

  return (
    <>
      <PageLayout
        direction={location.state?.direction}
        pageRef={homePageRef}
        className="home-page"
      >
        <div className="introduction">
          <p>
            {HOME_TEXT.INTRODUCTION1}
            <br />
            {HOME_TEXT.INTRODUCTION2}
            <br />
            {HOME_TEXT.INTRODUCTION3}
          </p>
          <br />
          <p className="smiley">{HOME_TEXT.SMILEY}</p>
          <HideArrowDown containerRef={homePageRef} />
        </div>

        <div className="box-container">
          <div className="black-box1">
            <Link to="/aboutme">{HOME_TEXT.GRID_ABOUTME}</Link>
          </div>
          <div className="white-box1">
            <img
              src={PoddinFace}
              alt={ALT_TEXT.PORTRAIT}
              className="poddin-vector"
            />
          </div>

          <div className="black-box2">
            <Link to="projects">{HOME_TEXT.GRID_PROJECTS}</Link>
          </div>
          <div className="white-box2">
            <img src={CodeImg} alt={ALT_TEXT.CODE_BRACKETS} />
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default Home;
