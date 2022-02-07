import React from "react";

const PoddinFace = process.env.PUBLIC_URL + "/images/poddinfacerealvector.png"
const CodeImg = process.env.PUBLIC_URL + "/images/code.jpg"
const ChainImg = process.env.PUBLIC_URL + "/images/chains.jpg"

function Home(){
    return(
        <>
        <main id="swup" className="transition-fade">
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
          <a href="/aboutme.html">MEG</a>
        </div>
      </div>
      <div className="white-box1">
        <img src={PoddinFace} alt=""/>
      </div>

      <div className="black-box2">
        <div className="h1-box">
          <a href="/projects.html">PROSJEKTER</a>
        </div>
      </div>
      <div className="white-box2">
        <img src={CodeImg} alt=""/>
      </div>
    </div>

    <div className="filler-image">
      <img src={ChainImg} alt=""/>
    </div>
  </main>
        </>
    );
}

export default Home;