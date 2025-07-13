import BlackJackImg from "../images/Projects/blackjack.png";
import SunnySideImg from "../images/Projects/sunnyside.png";
import FigmaImg from "../images/Projects/figma.png";
import {
PROJECTS_TEXT
} from "../language_and_strings/no";

export const projectsData = [
  {
    id: 'blackjack',
    image: BlackJackImg,
    alt: "Blackjack project",
    description: PROJECTS_TEXT.BLACKJACK_DESCRIPTION,
    githubUrl: "https://github.com/Peter-kodeHode/blackjack",
    githubText: "Se på Github"
  },
  {
    id: 'sunnyside',
    image: SunnySideImg,
    alt: "Sunnyside project",
    description: PROJECTS_TEXT.SUNNYSIDE_DESCRIPTION,
    githubUrl: "https://github.com/Peter-kodeHode/sunnyside",
    githubText: "Se mer på Github"
  },
  {
    id: 'figma',
    image: FigmaImg,
    alt: "Figma project",
    description: PROJECTS_TEXT.FIGMA_DESCRIPTION,
    githubUrl: null,
    githubText: null
  }
];