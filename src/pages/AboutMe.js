import React from "react";
import MyFace from "../images/AboutMe/itsme.jpg";
import AnimatedPage from "../globalComponents/AnimatedPage";
import Footer from "../globalComponents/Footer"; 

function AboutMe() {
  return (
    <>
      <AnimatedPage>
        <div className="aboutme">
          <h1>Litt om meg</h1>

          <img className="aboutgrey" src={MyFace} alt="Peter Daniel Nygaard" />

          <p>
            Hei!<br />
            Jeg heter Peter og er 31 år. Jeg er en relativt fersk spiller i
            utvikler-gamet!<br />
            På kurset <a href="https://www.kodehode.no/">Kodehode</a>, i regi av <a href="https://www.jobloop.no/">Jobloop</a>
            <br />fikk jeg god opplæring til å utvikle nettsider.<br /> Jeg har
            fått en god del erfaring innenfor front-end utvikling ellers,<br /> men jeg har
           et stort ønske til å tilegne meg enda mer kunnskap.<br /> Jeg er
            ingen trollmann enda, men jeg gikk på en måte på Kode-Hogwarts,<br /> så
            det er godt mulig jeg blir det til slutt.
          </p>
          <p>
            Jeg har jobbet en del med soloprosjekter der jeg har fulgt et gitt
            design,<br />
             men har også jobbet med egne design eller idèer. Jeg har
            også jobbet på et større gruppeprosjekt så langt. <br />
            Alt dette innenfor front-end, med et lite dryss av design.<br /> I løpet av disse prosjektene
            har jeg fått utnyttet en del av det jeg kan i HTML, CSS og
            JavaScript.<br /> Er også greit kjent med Node.js, React og
           og har også jobbet med APIer.
          </p>

          <p>
            Jeg har fra en tidlig alder vært interessert i teknologi,<br />
            gaming og data og har da anskaffet meg litt forskjellig erfaring fra
            disse interessene.<br /> Jeg har alltid vært den som har måttet hjelpe
            familiemedlemmer med tekniske problemer,<br /> til min noen ganger store
            ergelse.
          </p>
          <p>Var tidlig interessert i modding av spill,<br /> og lærte meg i
            mine yngre år det å programmere litt i Java <br />i sammenheng med at jeg
            laget meg en privatserver innenfor spillet RuneScape,<br /> som jeg da
            spilte en del.<br />
             Har også litt smått med erfaring innenfor Photoshop og Paint.NET,<br />
            da jeg har brukt dette en del til å tulle med venner gjennom memes og
            interne spøker. <br />
            Jeg har forsåvidt litt innsikt i nettverk ettersom
            jeg var en hyppig LAN deltaker<br /> og har tidligere hostet servere
            innenfor forskjellige spill også.
          </p>
          <p>
            Gamer, skater, ser en del på film<br /> og hører mye på musikk.<br />
            Bruker også mye tid med venner<br /> og min datter på 10 år.<br />
            Vi har også noen rare marsvin.<br />
            Utenom alt dette, så sier mamma<br /> at jeg er en snill og kjekk gutt.
          </p>
        </div>
         <Footer />
      </AnimatedPage>
    </>
  );
}

export default AboutMe;
