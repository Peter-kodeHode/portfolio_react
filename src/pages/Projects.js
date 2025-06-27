import React, { useState, useEffect } from "react";
import BlackJackImg from "../images/Projects/blackjack.png";
import SunnySideImg from "../images/Projects/sunnyside.png";
import FigmaImg from "../images/Projects/figma.png";
import AnimatedPage from "../globalComponents/AnimatedPage";
import GitHubImg from "../images/Footer/github.png";
import Footer from "../globalComponents/Footer";
import arrowdown from "../images/Home/arrow-down.svg";

function Projects() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <AnimatedPage>
        <div className="projects">
          <h1>PROSJEKTER</h1>
          <img className="arrow-down" src={arrowdown} alt="arrow down" />
        </div>

        <div className="projects">
          <div className={`dropdown ${activeDropdown === 0 ? 'active' : ''}`}>
            <a href="https://github.com/Peter-kodeHode/blackjack">
              <img 
                className="greyimg" 
                src={BlackJackImg} 
                alt="" 
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(0);
                }}
              />
            </a>
            <div className="dropdown-content">
              <p>
                Dette er et prosjekt som ble påbegynt i Scrimba sitt javascript
                kurs som jeg tok videre og bygget på med nye funksjoner som
                f.eks at man kan vedde mot dealeren og man kan skrive inn navnet
                sitt. Har og implementert litt flere regler fra faktisk
                Blackjack, noe som viste seg å være minst like utfordrende som
                selve kodingen. Har også påbegynt det å implementere en API som
                heter "Deckofcards" for å gjøre spillet litt mer livlig med å ha
                faktiske kort på bordet. Prosjektet omfatter veldig mye
                Javascript og er ikke 100% fullført enda.
              </p>
            </div>
          </div>
        </div>

        <div className="projects">
          <div className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
            {/* <a href="https://github.com/Peter-kodeHode/sunnsyside"> */}
            <img 
              className="greyimg" 
              src={SunnySideImg} 
              alt="" 
              onClick={() => toggleDropdown(1)}
            />
            {/* </a> */}
            <div className="dropdown-content">
              <p>
                Dette er en av flere oppgaver fra
                <a href="www.frontendmentor.io">Frontend Mentor</a> som jeg har
                vært gjennom. I dette prosjektet ble det brukt HTML og CSS med
                en del fokus på grid. Fikk tilegnet meg mye ny erfaring om grid
                og annen CSS.
              </p>
            </div>
          </div>

        </div>

        <div className="projects">
          <div className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
            {/* <a href="https://www.figma.com/file/YxP9F77XoQsf9VuACRodSg/OFL-prosjekt---Anders%2C-Peter-og-Joar?node-id=704%3A803"> */}
            <img 
              className="greyimg" 
              src={FigmaImg} 
              alt="" 
              onClick={() => toggleDropdown(2)}
            />
            {/* </a> */}
            <div className="dropdown-content">
              <p>
                Dette er et gruppeprosjekt jeg har gjort med to medstudenter. Vi
                ble gitt i oppgave fra en reell arbeidsgiver å designe en side
                for et opplæringskontor. Jeg lagde logoene selv og var ellers
                også med på å designe resten av siden. Fikk mye erfaring om det
                å jobbe samme med andre i et slikt prosjekt. Mange ting som man
                må bli enige om designmessig o.l. Det å jobbe for en
                arbeidsgiver med et prosjekt tar jeg også som god erfaring, selv
                om deres ønsker var noe uklare.
              </p>
            </div>
          </div>

        </div>
        <div className="projects">
          <h1>Mer kommer fortløpende</h1>
        </div>

        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Projects;
