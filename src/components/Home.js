import React from "react";

function Home(){
    return(
        <>
        <main id="swup" class="transition-fade">
    <div class="introduction">
      <p>
        Hei og velkommen! Mitt navn er Peter Daniel Nygaard og jeg driver med front-end!
      </p>
    </div>

    <div class="smiley">
      <p>:)</p>
    </div>

    <div class="box-container">
      <div class="black-box1">
        <div class="h1-box">
          <a href="/aboutme.html">MEG</a>
        </div>
      </div>
      <div class="white-box1">
        <img src="images/poddinfacerealvector.png" />
      </div>

      <div class="black-box2">
        <div class="h1-box">
          <a href="/projects.html">PROSJEKTER</a>
        </div>
      </div>
      <div class="white-box2">
        <img src="images/code.jpg" />
      </div>
    </div>

    <div class="filler-image">
      <img src="images/chains.jpg" />
    </div>
  </main>
        </>
    );
}

export default Home;