import React from "react";

function Footer(){
    return(
        <>
          <div class="footer">
    <div class="socials">
      <a target="blank" href="https://www.facebook.com/peter.daniel.nygaard/"><img src="images/facebook.png" /></a>
      <a target="blank" href="https://github.com/Peter-kodeHode"><img src="images/github.png" /></a>
      <a target="blank" href="https://peter-daniel-portfolio.herokuapp.com/"><img src="images/heroku.png" /></a>
    </div>
    <div class="contact-info">
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