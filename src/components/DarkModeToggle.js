import React from 'react';
import styled from 'styled-components/macro';
import { greyMedium, darkBlue, midnightBlueLight } from '../styles/colors';
import { sunIcon, moonIcon } from '../assets/images';
import { useTheme } from '../context/theme';

const StyledDarkModeToggle = styled.div`
  height: 3rem;
  width: 5rem;
  background-color: ${({ theme }) =>
    theme === 'dark' ? midnightBlueLight : greyMedium};
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  box-shadow: 0 0.5rem 1.5rem ${darkBlue}2A;
`;

const Circle = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => (theme === 'dark' ? darkBlue : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ theme }) =>
    theme === 'dark' ? 'translate(2rem)' : 'translate(0%)'};
  transition: all 0.3s ease;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
`;

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledDarkModeToggle onClick={toggleTheme} theme={theme}>
      <Circle theme={theme}>
        <Image
          alt={theme || 'light'}
          src={theme === 'dark' ? moonIcon : sunIcon}
        />
      </Circle>
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
