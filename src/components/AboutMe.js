import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MyFace = process.env.PUBLIC_URL + "/images/itsme.jpg"
const ChainImg = process.env.PUBLIC_URL + "/images/chains.jpg"


function AboutMe() {
    return(
        <>
        
        <main id="swup" className="transition-fade">
    <div className="aboutme">
      <h1>Litt om meg</h1>
      
      <img className="aboutgrey" src={MyFace} alt="Peter"/>

      <p>
        Hei! Jeg heter Peter og jeg er en relativt fersk spiller i
        utvikler-gamet! På Kodehode lærer jeg meg å utvikle nettsider, og er
        lysten på å tilegne meg enda mer kunnskap innenfor feltet. Jeg er
        ingen trollmann enda, men jeg går på en måte på Kode-Hogwarts, så det
        er godt mulig jeg blir det til slutt.
      </p>
      <p>
        Jeg har jobbet en del med soloprosjekter der jeg har fulgt et gitt
        design, men har også jobbet med egne design eller idèer. Jeg har også
        jobbet på et større gruppeprosjekt så langt. Alt dette innenfor
        front-end, med et lite dryss av design. I løpet av disse prosjektene
        har jeg fått utnyttet en del av det jeg kan i HTML, CSS og JavaScript. 
        Har også nylig blitt mer kjent med Node.js, React og APIer.
      </p>
      <p>
        Her er litt info angående min erfaring fra andre muligens relevante
        felt. Jeg har fra en tidlig alder vært interessert i teknologi, gaming
        og data og har da anskaffet meg litt forskjellig erfaring fra denne
        interessen. Jeg har alltid vært den som har måttet hjelpe
        familiemedlemmer med tekniske problemer, til min noen ganger store
        ergelse. Var tidlig interessert i modding av spill, og lærte meg i
        mine yngre år det å programmere litt i Java i sammenheng med at jeg
        laget meg en privatserver innenfor spillet RuneScape, som jeg da
        spilte en del. Har også litt smått med erfaring innenfor Photoshop
        jeg har brukt dette en del til å tulle med venner gjennom memes og
        interne spøker. Jeg har forsåvidt litt innsikt i nettverk ettersom jeg
        var en hyppig LAN deltaker og har tidligere hostet servere innenfor
        forskjellige spill også.
        Utenom alt dette, så sier mamma at jeg er en snill og kjekk gutt.
      </p>
    </div>
    <div className="filler-image" >
      <img src={ChainImg} alt=""/>
    </div>
  </main>
 
        </>
    );
}

export default AboutMe;