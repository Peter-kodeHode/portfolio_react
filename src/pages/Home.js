import React from "react";
import { Link } from "react-router-dom";
import PoddinFace from "../images/Home/poddinfacerealvector.png";
import CodeImg from "../images/Home/code.jpg";
import ChainImg from "../images/Home/chains.jpg";
import AnimatedPage from "../globalComponents/AnimatedPage";
import {
  HOME_GRID_ABOUTME,
  HOME_GRID_PROJECTS,
  HOME_INTRODUCTION_SMILEY,
  HOME_INTRODUCTION_TEXT1,
  HOME_INTRODUCTION_TEXT2,
  HOME_INTRODUCTION_TEXT3,
} from "../language_and_strings/no";

function Home() {
  return (
    <>
      <AnimatedPage>
        <div className="introduction">
          <p>
            {HOME_INTRODUCTION_TEXT1}
            <br />
            {HOME_INTRODUCTION_TEXT2}
            <br />
            {HOME_INTRODUCTION_TEXT3}
          </p>
          <br />
          <p className="smiley">{HOME_INTRODUCTION_SMILEY}</p>
        </div>

        <div className="box-container">
          <div className="black-box1">
            <Link to="/aboutme">{HOME_GRID_ABOUTME}</Link>
          </div>
          <div className="white-box1">
            <img src={PoddinFace} alt="" />
          </div>

          <div className="black-box2">
            <Link to="projects">{HOME_GRID_PROJECTS}</Link>
          </div>
          <div className="white-box2">
            <img src={CodeImg} alt="" />
          </div>
        </div>

        <div className="filler-image">
          <img src={ChainImg} alt="" />
        </div>
      </AnimatedPage>
    </>
  );
}

export default Home;
