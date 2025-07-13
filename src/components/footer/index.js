import React from "react";
import FaceBookImg from "../../images/Footer/facebook.svg";
import GitHubImg from "../../images/Footer/github.svg";
import "./footer.css";
import { ALT_TEXT } from "../../language_and_strings/no";

function Footer() {
  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="socials">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/peter.daniel.nygaard/"
            aria-label="Facebook profil - åpnes i ny fane"
          >
            <img
              src={FaceBookImg}
              className="social-icon"
              alt={ALT_TEXT.FACEBOOK_LOGO}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Peter-kodeHode"
            aria-label="GitHub profil - åpnes i ny fane"
          >
            <img
              src={GitHubImg}
              className="social-icon"
              alt={ALT_TEXT.GITHUB_LOGO}
            />
          </a>
        </div>
        <div className="contact-info">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/peter.daniel.nygaard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profil - åpnes i ny fane"
              >
                Peter Daniel Nygaard
              </a>
            </li>
            <li>
              <a
                href="tel:+4793021764"
                aria-label="Ring Peter Daniel Nygaard"
              >
                +4793021764
              </a>
            </li>
            <li>
              <a
                href="mailto:peter.daniel.nygaard@gmail.com"
                aria-label="Send e-post til Peter Daniel Nygaard"
              >
                peter.daniel.nygaard@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
