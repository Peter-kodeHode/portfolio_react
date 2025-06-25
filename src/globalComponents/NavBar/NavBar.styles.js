import styled, { css } from "styled-components";

export const StyledNavBar = styled.nav`
  border-bottom: 6px solid var(--primary);
  
  min-width: 100%;
  min-height:15vh;
  max-height:15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: static;
  background-color: var(--secondary);
  & > a {
    margin: 2em;
    @media (max-width: 500px) {
      margin: 1em;
    }
  }
`;

// Create a base style for all icons
const baseIconStyles = css`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 500ms ease-in-out;
  @media (max-width: 500px) {
    width: 3em;
  }

  &:active {
    transform: scale(1.5);
    transition: 150ms all ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
    @media (max-width: 500px) {
      transition: 1ms;
    }
  }
`;

export const Logo = styled.img`
  ${baseIconStyles}
  
  
  &:hover {

    transform:  rotate(540deg);
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
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
      transition: 1ms;
    }
  }
`;

export const Home = styled.img`
  ${baseIconStyles}

  &:hover {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
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
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
    transition: all 200ms ease;
    @media (max-width: 500px) {
      filter: none;
      transition: none;
    }
  }
`;
