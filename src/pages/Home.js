import React from "react";
import {
  Link} 
  from "react-router-dom";
import PoddinFace from "../images/Home/poddinfacerealvector.png";
import CodeImg from "../images/Home/code.jpg";
import ChainImg from "../images/Home/chains.jpg";


function Home(){

    return(
        <>
        
    <div className="introduction">
      <p>
        Hei og velkommen! Mitt navn er Peter Daniel Nygaard og jeg driver med front-end!
      </p>
    </div>

    <div className="smiley">
      <p>:)</p>
    </div>

    <div className="box-container">
      <div className="black-box1">
        <div className="h1-box">
         <Link to="/aboutme">MEG</Link>
        </div>
      </div>
      <div className="white-box1">
        <img src={PoddinFace} alt=""/>
      </div>
      
      <div className="black-box2">
        <div className="h1-box">
          <Link to="projects">PROSJEKTER</Link>
        </div>
      </div>
      <div className="white-box2">
        <img src={CodeImg} alt=""/>
      </div>
    </div>

    <div className="filler-image">
      <img src={ChainImg} alt=""/>
    </div>
        </>
    );
    
}

export default Home;