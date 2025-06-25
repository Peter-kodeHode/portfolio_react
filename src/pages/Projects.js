import React from "react";
import BlackJackImg from "../images/Projects/blackjack.png";
import SunnySideImg from "../images/Projects/sunnyside.png";
import FigmaImg from "../images/Projects/figma.png";
import AnimatedPage from "../globalComponents/AnimatedPage";
import GitHubImg from "../images/Footer/github.png";
import Footer from "../globalComponents/Footer"; 
function Projects() {
  return (
    <>
      <AnimatedPage>
        <div className="projects">
          <h1>PROSJEKTER</h1>
        
        <div className="github-projects">
          <p className="projects-clickme">Trykk på bildene for mer info</p>
        </div>

        <span className="projects-border">
          <div className="dropdown">
            {/* <a href="https://github.com/Peter-kodeHode/blackjack"> */}
            <img className="greyimg" src={BlackJackImg} alt="" />
            {/* </a> */}
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
        </span>
        <div className="github-projects">
          <p className="projects-clickme">Trykk på meg!</p>
          <a target="blank" href="https://github.com/Peter-kodeHode/blackjack">
            <img src={GitHubImg} alt="Github logo" />
          </a>
        </div>
        <span className="projects-border">
          <div className="dropdown">
            {/* <a href="https://github.com/Peter-kodeHode/sunnsyside"> */}
            <img className="greyimg" src={SunnySideImg} alt="" />
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
        </span>
        <div className="github-projects">
          <p className="projects-clickme">Trykk på meg!</p>
          <a target="blank" href="https://github.com/Peter-kodeHode/sunnsyside">
            <img src={GitHubImg} alt="Github logo" />
          </a>
        </div>
        <span className="projects-border">
          <div className="dropdown">
            {/* <a href="https://www.figma.com/file/YxP9F77XoQsf9VuACRodSg/OFL-prosjekt---Anders%2C-Peter-og-Joar?node-id=704%3A803"> */}
            <img className="greyimg" src={FigmaImg} alt="" />
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
        </span>
        <div className="github-projects">
          <p className="projects-clickme">Trykk på meg!</p>
          <a
            target="blank"
            href="https://www.figma.com/file/YxP9F77XoQsf9VuACRodSg/OFL-prosjekt---Anders%2C-Peter-og-Joar?node-id=704%3A803>"
          >
            <img src={GitHubImg} alt="Github logo" />
          </a>
        </div>

        
          <h1>Mer kommer fortløpende</h1>
        </div>
         <Footer />
      </AnimatedPage>
    </>
  );
}

export default Projects;
