import styled from "styled-components";

export const StyledNavBar = styled.nav`
  border-bottom: solid var(--primary) 6px;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: var(--secondary);
  & > a {
    margin: 0.5em;
  }
  & > img {
    width: 5em;
  }
`;

export const Logo = styled.img`
  padding: 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  transition: 1000ms;
  &:hover {
    transition: 1000ms;
    rotate: 1260deg;
  }
`;

export const Home = styled.img`
  padding: 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: 1000ms;
  &:hover {
    transform: scale(1.3);
    transition: 500ms;
  }
`;

export const CheckList = styled.img`
  padding: 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: 250ms;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
    transition: 500ms;
  }
`;
