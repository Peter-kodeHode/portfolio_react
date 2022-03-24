import React from "react";
import { Link } from "react-router-dom";
import PoddinFace from "../images/Home/poddinfacerealvector.png";
import CodeImg from "../images/Home/code.jpg";
import ChainImg from "../images/Home/chains.jpg";
import AnimatedPage from "./AllPages/AnimatedPage";

function Home() {
  return (
    <>
      <AnimatedPage>
        <div className="introduction">
          <p>
            Hei og velkommen!
            <br />
            Mitt navn er Peter Daniel Nygaard
            <br />
            og jeg driver med front-end!
          </p>
          <br />
          <p className="smiley">:)</p>
        </div>

        <div className="box-container">
          <div className="black-box1">
            <Link to="/aboutme">MEG</Link>
          </div>
          <div className="white-box1">
            <img src={PoddinFace} alt="" />
          </div>

          <div className="black-box2">
            <Link to="projects">PROSJEKTER</Link>
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
