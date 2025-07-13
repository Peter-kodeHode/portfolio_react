import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/ui/PageHeader/";
import MyFace from "../images/AboutMe/itsme.jpg";
import {
  ABOUT_TEXT,
  ALT_TEXT
} from "../language_and_strings/no";

function AboutMe() {
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Auto-focus the scroll container when component mounts
    if (pageRef.current) {
      pageRef.current.focus();
    }
  }, []);

  return (
    <PageLayout
      direction={location.state?.direction}
      pageRef={pageRef}
      className="aboutme-page"
    >
      <main role="main" aria-label="Om Peter Daniel Nygaard">
        <PageHeader
          title={<>{ABOUT_TEXT.INTRODUCTION}</>}
          containerRef={pageRef}
          className="aboutme"
        />

        <div className="aboutme">
          <img className="aboutgrey" src={MyFace} alt={ALT_TEXT.PORTRAIT} />
        </div>

        <div className="aboutme">
          <p>
            {ABOUT_TEXT.PARAGRAPH1_PART1}
            <a
              href="https://www.kodehode.no/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kodehode - åpnes i ny fane"
            >
              {ABOUT_TEXT.PARAGRAPH1_KODEHODE}
            </a>
            {ABOUT_TEXT.PARAGRAPH1_PART2}
            <a
              href="https://www.jobloop.no/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jobloop - åpnes i ny fane"
            >
              {ABOUT_TEXT.PARAGRAPH1_JOBLOOP}
            </a>
            {ABOUT_TEXT.PARAGRAPH1_PART3}
          </p>
        </div>

        <div className="aboutme">
          <p>{ABOUT_TEXT.PARAGRAPH2}</p>
        </div>

        <div className="aboutme">
          <p>{ABOUT_TEXT.PARAGRAPH3}</p>
        </div>

        <div className="aboutme">
          <p>{ABOUT_TEXT.PARAGRAPH4}</p>
        </div>

        <div className="aboutme">
          <p>{ABOUT_TEXT.PARAGRAPH5}</p>
        </div>
      </main>
      
    </PageLayout>
  );
}

export default AboutMe;
