import React, { Fragment, useState } from 'react';
import styled from 'styled-components/macro';
import DarkModeToggle from '../DarkModeToggle';
import Spacer from '../Spacer';
import { small, xsmall } from '../../styles/breakpoints';
import NavbarMobile from './NavbarMobile';
import Tabs from './Tabs';
import useDynamicColors from '../../hooks/useDynamicColors';

const StyledNavbar = styled.nav`
  align-self: flex-end;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 15rem;

  @media screen and (max-width: ${small}) {
    width: 100vw;
    height: 100%;
    transform: ${({ menuOpen }) => `translateX(${menuOpen ? '0' : '100%'})`};
    opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
    transition: transform 0.5s ease, opacity 0.5s 0.2s ease,
      background-color 0.5s ease;
    background-color: ${({ backgroundColor }) => backgroundColor};
    justify-content: flex-start;
    position: fixed;
    z-index: 3;
    top: 70px;
  }

  @media screen and (max-height: 600px) and (min-width: ${small}) {
    order: 2;
    align-self: center;
  }

  @media screen and (max-height: ${xsmall}) {
    min-width: 12rem;
  }
`;

const StyledSpacer = styled(Spacer)`
  @media screen and (max-height: 600px) and (min-width: ${small}) {
    display: none;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { header } = useDynamicColors();

  return (
    <>
      <NavbarMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <StyledSpacer size="s" />
      <StyledNavbar backgroundColor={header} menuOpen={menuOpen}>
        <Tabs setMenuOpen={setMenuOpen} />
        <Spacer size="s" />
        <DarkModeToggle />
      </StyledNavbar>
    </>
  );
};

export default Navbar;
