import styled from "styled-components";

export const StyledNavBar = styled.nav`
  border: solid var(--primary) 6px;
  border-bottom: none;
  min-width: 100%;
  max-height: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: static;
  background-color: var(--secondary);
  & > a {
    margin: 2em;
    @media (max-width: 500px) {
    }
    margin: 1em;
  }
`;

export const Logo = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  transition: all 1000ms ease-in-out;
  @media (max-width: 500px) {
    width: 3em;
  }
  &:hover {
    transition: all 750ms ease-in-out;
    rotate: 1260deg;
    @media (max-width: 500px) {
      transform: none;
      rotate: none;
    }
  }
  &:active {
    transform: scale(1.2);
    transition: 250ms all ease-in-out;

    @media (max-width: 500px) {
      -webkit-transform: rotate(180deg);
      transform: scale(1.2) rotate(180deg);
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
      transition: 1ms;
    }
  }
`;

export const Home = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 500ms ease-in-out;
  @media (max-width: 500px) {
    width: 3em;
  }
  &:hover {
    transform: scale(1.2);
    transition: all 250ms ease-in-out;
    @media (max-width: 500px) {
      transform: none;
      transition: none;
    }
  }
  &:active {
    transform: scale(1.2);
    @media (max-width: 500px) {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
      transition: 1ms;
    }
  }
`;

export const CheckList = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 500ms ease-in-out;
  @media (max-width: 500px) {
    width: 3em;
  }
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
    transition: all 250ms ease-in-out;
    @media (max-width: 500px) {
      filter: none;
      transition: none;
    }
  }
  &:active {
    transform: scale(1.2);
    transition: 250ms all ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
    @media (max-width: 500px) {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
      transition: 1ms;
    }
  }
`;
