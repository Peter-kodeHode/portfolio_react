import React from "react";

const FaceBookImg = process.env.PUBLIC_URL + "/images/facebook.png"
const GitHubImg = process.env.PUBLIC_URL + "/images/github.png"
const HerokuImg = process.env.PUBLIC_URL + "/images/heroku.png"

function Footer(){
    return(
        <>
          <div className="footer">
    <div className="socials">
      <a target="blank" href="https://www.facebook.com/peter.daniel.nygaard/"><img src={FaceBookImg} alt="Facebook logo" /></a>
      <a target="blank" href="https://github.com/Peter-kodeHode"><img src={GitHubImg} alt="Github logo"/></a>
      <a target="blank" href="https://peter-daniel-portfolio.herokuapp.com/"><img src={HerokuImg} alt="Heroku logo" /></a>
    </div>
    <div className="contact-info">
      <ul>
        <li><a href="https://www.facebook.com/peter.daniel.nygaard/">Peter Daniel Nygaard</a></li>
        <li><a href="tel:+4793021764">+4793021764</a></li>
        <li><a href="mailto:Peter.Daniel.Nygaard@Gmail.com">Peter.Daniel.Nygaard@Gmail.com</a></li>
      </ul>
    </div>
  </div>
        </>
    );
}

export default Footer;