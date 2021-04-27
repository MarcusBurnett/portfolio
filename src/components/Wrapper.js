import React from 'react';
import styled from 'styled-components/macro';
import { useTheme } from '../context/theme';
import { midnightBlue } from '../styles/colors';

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({ theme }) =>
    theme === 'dark' ? midnightBlue : '#FFFFFF'};
  overflow: hidden;
`;

const Wrapper = ({ children }) => {
  const { theme } = useTheme();

  return <StyledWrapper theme={theme}>{children}</StyledWrapper>;
};

export default Wrapper;
