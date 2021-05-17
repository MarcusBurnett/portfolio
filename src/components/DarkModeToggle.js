import React from 'react';
import styled from 'styled-components/macro';
import { lightBlue, darkBlue, midnightBlueLight } from '../styles/colors';
import { sunIcon, moonIcon } from '../assets/images';
import { useTheme } from '../context/theme';
import { small } from '../styles/breakpoints';
import { useThemeSelect } from '../hooks';

const StyledDarkModeToggle = styled.div`
  height: 2.4rem;
  width: 4rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0.5rem 1.5rem ${darkBlue}2A;

  @media screen and (max-width: ${small}) {
    width: 6rem;
    height: 3.6rem;
    padding: 0 0.3rem;
  }
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 2px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ transform }) => transform.desktop};
  transition: all 0.4s ease;

  @media screen and (max-width: ${small}) {
    width: 3rem;
    height: 3rem;
    transform: ${({ transform }) => transform.mobile};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { transform, backgroundColor, circleColor, icon } = useThemeSelect(
    {
      transform: { desktop: 'translate(0%)', mobile: 'translate(0%)' },
      backgroundColor: lightBlue,
      circleColor: '#ffffff',
      icon: sunIcon,
    },
    {
      transform: { desktop: 'translate(1.6rem)', mobile: 'translate(2.4rem)' },
      backgroundColor: midnightBlueLight,
      circleColor: darkBlue,
      icon: moonIcon,
    }
  );

  return (
    <StyledDarkModeToggle
      onClick={toggleTheme}
      backgroundColor={backgroundColor}
    >
      <Circle transform={transform} backgroundColor={circleColor}>
        <Image alt={theme || 'dark'} src={icon} />
      </Circle>
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
