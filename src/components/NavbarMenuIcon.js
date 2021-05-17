import React from 'react';
import styled from 'styled-components/macro';
import Spacer from './Spacer';
import { small } from '../styles/breakpoints';

const Menu = styled.div`
  padding: 1rem;
  border-radius: 0.7rem;
  width: 4rem;
  height: 4rem;
  display: none;
  flex-direction: column;
  justify-content: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
  outline: none;
  z-index: 3;

  @media screen and (max-width: ${small}) {
    display: flex;
    align-items: center;
  }
`;

const Line = styled.div`
  background-color: #ffffff;
  height: 0.2rem;
  width: ${({ active }) => (active ? '150%' : '100%')};
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  border-radius: 0.1rem;
`;

const Line1 = styled(Line)`
  width: ${({ active }) => (active ? undefined : '60%')};
  transform-origin: 72% 500%;
  transform: ${({ active }) => `rotate(${active ? '-45deg' : '0deg'})`};
`;

const Line2 = styled(Line)`
  width: 100%;
  transform: ${({ active }) => `rotateY(${active ? '-90deg' : '0deg'})`};
`;

const Line3 = styled(Line)`
  width: ${({ active }) => (active ? undefined : '60%')};
  transform-origin: 68% -400%;
  transform: ${({ active }) => `rotate(${active ? '45deg' : '0deg'})`};
`;

const NavbarMenuIcon = ({ menuOpen, setMenuOpen }) => (
  <Menu
    active={menuOpen}
    onClick={() => setMenuOpen((prev) => !prev)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 13 && setMenuOpen((prev) => !prev)}
  >
    <Line1 active={menuOpen} />
    <Spacer />
    <Line2 active={menuOpen} />
    <Spacer />
    <Line3 active={menuOpen} />
  </Menu>
);

export default NavbarMenuIcon;
