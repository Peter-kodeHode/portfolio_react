import styled, { css } from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: var(--primary);
  height: 15dvh; 
  border-bottom: solid var(--secondary) 6px;
  position: sticky; 
  top: 0;
  z-index: 10;
  pointer-events: none; /* This allows wheel and touch events to pass through */
  
  & > a {
    margin: 2em;
    pointer-events: auto; /* Re-enable for navigation links */
    text-decoration: none; /* Remove underline from links */
    color: var(--secondary); /* Ensure links are visible */
  }
  
  @media (max-width: 500px) {
    height: 15dvh;
    & > a {
      margin: 1em;
    }
  }
`;

// Create a base style for all icons
const baseIconStyles = css`
  filter: var(--icon-filter);
  transition: all 500ms ease-in-out;
  pointer-events: auto; /* Ensure icons are clickable */
  width: 7.5dvw;
  height: 7.5dvh;
  
  @media (max-width: 500px) {
    width: 2.5em;
    height: 2.5em;
  }

  &:active {
    transform: scale(1.5);
    transition: 150ms all ease-in-out;
    filter: var(--icon-filter) drop-shadow(0px 4px 4px var(--shadow-color));
    @media (max-width: 500px) {
      transition: 1ms;
    }
  }
`;

export const Logo = styled.img`
  ${baseIconStyles}
  
  &:hover {
    transform: rotate(540deg);
    transition: all 1000ms ease-in-out;

    @media (max-width: 500px) {
      transform: none;
      rotate: none;
    }
  }
  &:active {
    transform: scale(1.3);
    transition: 50ms all ease-in-out;

    @media (max-width: 500px) {
      -webkit-transform: rotate(180deg);
      transform: scale(1.2) rotate(180deg);
      filter: var(--icon-filter) drop-shadow(0px 4px 4px var(--shadow-color));
      transition: 1ms;
    }
  }
`;

export const Home = styled.img`
  ${baseIconStyles}
 
  &:hover {
    transform: scale(1.1);
    filter: var(--icon-filter) drop-shadow(0px 6px 6px var(--shadow-color));
    transition: all 200ms ease;
    @media (max-width: 500px) {
      transform: none;
      transition: none;
    }
  }
`;

export const CheckList = styled.img`
  ${baseIconStyles}

  &:hover {
    transform: scale(1.1);
    filter: var(--icon-filter) drop-shadow(0px 6px 6px var(--shadow-color));
    transition: all 200ms ease;
    @media (max-width: 500px) {
      transform: none;
      filter: var(--icon-filter);
      transition: none;
    }
  }
`;

export const ThemeButton = styled.button`

  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
  outline: none;
  pointer-events: auto;
  margin:2em;
  
  @media (max-width: 500px) {
   
  }

  img {
    width: 7.5dvw;
    height: 7.5dvh;
    display: block;
    filter: var(--icon-filter);
    transition: all 500ms ease-in-out;
    
    @media (max-width: 500px) {
      width: 3em;
      height: 3em;
    }
  }

  &:hover img {
    transform: scale(1.1);
    filter: var(--icon-filter) drop-shadow(0px 6px 6px var(--shadow-color));
    transition: all 200ms ease;
    
    @media (max-width: 500px) {
      transform: none;
      transition: none;
    }
  }

  &:active img {
    transform: scale(1.5);
    transition: 150ms all ease-in-out;
    
    @media (max-width: 500px) {
      transform: scale(1.2);
      transition: 1ms;
    }
  }
`;
