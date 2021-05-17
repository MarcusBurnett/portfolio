import React from 'react';
import styled from 'styled-components/macro';
import { darkBlue, blue } from '../../styles/colors';
import { useTheme } from '../../context/theme';
import { small } from '../../styles/breakpoints';
import { useScrollPosition, useTabs } from '../../hooks';
import NavbarMenuIcon from './NavbarMenuIcon';

const StyledNavbarMobile = styled.div`
  display: none;

  @media screen and (max-width: ${small}) {
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 2rem;
    height: ${({ scrollPosition, menuOpen }) =>
      scrollPosition >= 90 || menuOpen ? '70px' : '0'};
    width: 100vw;
    z-index: 3;
    transition: height 0.3s ease, background-color 0.3s ease;
    background-color: ${({ theme }) => (theme === 'dark' ? darkBlue : blue)};
    box-shadow: 0 1rem 2rem #00000033;
    overflow: hidden;
  }
`;

const Icon = styled.img`
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;

  @media screen and (max-width: ${small}) {
    margin-right: 1.5rem;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

const NavbarMobile = ({ menuOpen, setMenuOpen }) => {
  const { theme } = useTheme();
  const scrollPosition = useScrollPosition();
  const { selectedTab } = useTabs();

  return (
    <StyledNavbarMobile
      scrollPosition={scrollPosition}
      menuOpen={menuOpen}
      theme={theme}
    >
      <TitleContainer menuOpen={menuOpen}>
        <Icon src={selectedTab.icon} alt={`${selectedTab.title} icon`} />
        <Title>{selectedTab.title}</Title>
      </TitleContainer>
      <NavbarMenuIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </StyledNavbarMobile>
  );
};

export default NavbarMobile;
