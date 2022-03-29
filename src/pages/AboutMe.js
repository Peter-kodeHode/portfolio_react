import React from "react";
import MyFace from "../images/AboutMe/itsme.jpg";
import ChainImg from "../images/AboutMe/chains.jpg";
import AnimatedPage from "../globalComponents/AnimatedPage";

function AboutMe() {
  return (
    <>
      <AnimatedPage>
        <div className="aboutme">
          <h1>Litt om meg</h1>

          <img className="aboutgrey" src={MyFace} alt="Peter" />

          <p><br />
            Hei! Jeg heter Peter og jeg er en relativt fersk spiller i
            utvikler-gamet! På Kodehode lærer jeg meg å utvikle nettsider, og er
            lysten på å tilegne meg enda mer kunnskap innenfor feltet. Jeg er
            ingen trollmann enda, men jeg går på en måte på Kode-Hogwarts, så
            det er godt mulig jeg blir det til slutt.
          </p>
          <p><br />
            Jeg har jobbet en del med soloprosjekter der jeg har fulgt et gitt
            design, men har også jobbet med egne design eller idèer. Jeg har
            også jobbet på et større gruppeprosjekt så langt. Alt dette innenfor
            front-end, med et lite dryss av design. I løpet av disse prosjektene
            har jeg fått utnyttet en del av det jeg kan i HTML, CSS og
            JavaScript. Har også nylig blitt mer kjent med Node.js, React og
            APIer.
          </p>

          <p><br />
            Her er litt info angående min erfaring fra andre muligens relevante
            felt. Jeg har fra en tidlig alder vært interessert i teknologi,
            gaming og data og har da anskaffet meg litt forskjellig erfaring fra
            disse interessen. Jeg har alltid vært den som har måttet hjelpe
            familiemedlemmer med tekniske problemer, til min noen ganger store
            ergelse.
          </p><br />
          <p><br />Var tidlig interessert i modding av spill, og lærte meg i
            mine yngre år det å programmere litt i Java i sammenheng med at jeg
            laget meg en privatserver innenfor spillet RuneScape, som jeg da
            spilte en del. Har også litt smått med erfaring innenfor Photoshop
            jeg har brukt dette en del til å tulle med venner gjennom memes og
            interne spøker. Jeg har forsåvidt litt innsikt i nettverk ettersom
            jeg var en hyppig LAN deltaker og har tidligere hostet servere
            innenfor forskjellige spill også.
          </p>
          <p><br />
            Gamer, skater, ser en del på film og hører mye på musikk.
            Bruker også mye tid med venner og min datter på syv år.
            Har også noen rare marsvin.
            Utenom alt dette, så sier mamma at jeg er en snill og kjekk gutt.
          </p>
        </div>
        <div className="filler-image">
          <img src={ChainImg} alt="" />
        </div>
      </AnimatedPage>
    </>
  );
}

export default AboutMe;
