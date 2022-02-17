import React from "react";

const BlackJackImg = process.env.PUBLIC_URL + "/images/blackjack.png"
const SunnySideImg = process.env.PUBLIC_URL + "/images/sunnyside.png"
const FigmaImg = process.env.PUBLIC_URL + "/images/figma.png"
const ChainImg = process.env.PUBLIC_URL + "/images/chains.jpg"


function Projects() {
    return(
<>
<<<<<<< HEAD
    
=======
     
>>>>>>> 99ba9d482ffae31a058f7b89eae7d5dbcc367e7b
<main id="swup" className="transition-fade">
    <div className="aboutme">
      <h1>PROSJEKTER</h1>
    </div>
    <div className="dropdown">
      <a href="https://github.com/Peter-kodeHode/blackjack"><img className="greyimg" src={BlackJackImg}  alt=""/></a>
      <div className="dropdown-content">
        <p>Dette er et prosjekt som ble påbegynt i Scrimba sitt javascript kurs som jeg tok videre
          og bygget på med nye funksjoner som f.eks at man kan vedde mot dealeren og man kan skrive inn navnet sitt. Har
          og implementert litt flere regler fra faktisk Blackjack, noe som viste seg å være minst like utfordrende som
          selve kodingen. Har også påbegynt det å implementere en API som heter "Deckofcards" for å gjøre spillet litt
          mer livlig med å ha faktiske kort på bordet. Prosjektet omfatter veldig mye Javascript og er ikke 100% fullført enda.
        </p>
      </div>
    </div>

    <div className="dropdown">
      
     <a href="https://github.com/Peter-kodeHode/sunnsyside"><img className="greyimg" src={SunnySideImg} alt=""/></a> <div className="dropdown-content">
        <p>Dette er en av flere oppgaver fra <a href="www.frontendmentor.io">Frontend Mentor</a> som jeg har vært
          gjennom. I dette prosjektet ble det brukt HTML og CSS med en del fokus på grid. Fikk tilegnet meg mye ny
          erfaring om grid og annen CSS. </p>
      </div>
    </div>

    <div className="dropdown">
     <a href="https://www.figma.com/file/YxP9F77XoQsf9VuACRodSg/OFL-prosjekt---Anders%2C-Peter-og-Joar?node-id=704%3A803"><img className="greyimg" src={FigmaImg} alt=""/></a> 
      <div className="dropdown-content">
        <p>Dette er et gruppeprosjekt jeg har gjort med to medstudenter. Vi ble gitt i oppgave fra en reell arbeidsgiver
          å designe en side for et opplæringskontor. Jeg lagde logoene selv og var ellers også med på å designe resten
          av siden. Fikk mye erfaring om det å jobbe samme med andre i et slikt prosjekt. Mange ting som man må bli
          enige om designmessig o.l. Det å jobbe for en arbeidsgiver med et prosjekt tar jeg også som god erfaring, selv om deres
          ønsker var noe uklare. </p>
      </div>
    </div>

    <div className="aboutme">
      <h1>Mer kommer fortløpende</h1>
    </div>
    <div className="filler-image">
      <img src={ChainImg} alt=""/>
    </div>
  </main>

  
</>
    );
}

export default Projects;