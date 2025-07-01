import React, { useEffect, useRef } from "react";
import MyFace from "../images/AboutMe/itsme.jpg";
import AnimatedPage from "../globalComponents/AnimatedPage";
import Footer from "../globalComponents/Footer";
import arrowdown from "../images/Home/arrow-down.svg";
import {
  ABOUT_ME_INTRODUCTION,
  ABOUT_ME_PARAGRAPH1_PART1,
  ABOUT_ME_PARAGRAPH1_KODEHODE,
  ABOUT_ME_PARAGRAPH1_PART2,
  ABOUT_ME_PARAGRAPH1_JOBLOOP,
  ABOUT_ME_PARAGRAPH1_PART3,
  ABOUT_ME_PARAGRAPH2,
  ABOUT_ME_PARAGRAPH3,
  ABOUT_ME_PARAGRAPH4,
  ABOUT_ME_PARAGRAPH5,
} from "../language_and_strings/no";
function AboutMe() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.focus();
    }
  }, []);

  return (
    <>
      <AnimatedPage>
        <div className="aboutme-page" tabIndex="0" ref={pageRef}>
          <div className="aboutme">
            <h1>{ABOUT_ME_INTRODUCTION}</h1>
            <img className="arrow-down" src={arrowdown} alt="arrow down" />
          </div>
          
          <div className="aboutme">
            <img className="aboutgrey" src={MyFace} alt="Peter Daniel Nygaard" />
          </div>
          
          <div className="aboutme">
            <p>
              {ABOUT_ME_PARAGRAPH1_PART1}
              <a href="https://www.kodehode.no/" target="_blank" rel="noopener noreferrer">{ABOUT_ME_PARAGRAPH1_KODEHODE}</a>
              {ABOUT_ME_PARAGRAPH1_PART2}
              <a href="https://www.jobloop.no/" target="_blank" rel="noopener noreferrer">{ABOUT_ME_PARAGRAPH1_JOBLOOP}</a>
              {ABOUT_ME_PARAGRAPH1_PART3}
            </p>
          </div>
          
          <div className="aboutme">
            <p>{ABOUT_ME_PARAGRAPH2}</p>
          </div>
          
          <div className="aboutme">
            <p>{ABOUT_ME_PARAGRAPH3}</p>
          </div>
          
          <div className="aboutme">
            <p>{ABOUT_ME_PARAGRAPH4}</p>
          </div>
          
          <div className="aboutme">
            <p>{ABOUT_ME_PARAGRAPH5}</p>
          </div>
          
          <Footer />
        </div>
      </AnimatedPage>
    </>
  );
}

export default AboutMe;
