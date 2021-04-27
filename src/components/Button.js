import React from 'react';
import styled from 'styled-components/macro';
import { blue, darkBlue, yellow } from '../styles/colors';
import Spinner from './Spinner';
import { medium } from '../styles/fonts';
import { useTheme } from '../context/theme';

const StyledButton = styled.button`
  font-weight: ${medium};
  color: ${({ theme }) => (theme === 'dark' ? darkBlue : '#ffffff')};
  position: relative;
  min-height: ${({ small }) => (small ? '3rem' : '5rem')};
  width: ${({ small }) => (small ? 'auto' : '100%')};
  padding: 0 3rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border: 0.1rem solid ${({ theme }) => (theme === 'dark' ? yellow : blue)};
  background-color: ${({ theme }) => (theme === 'dark' ? yellow : blue)};

  &:hover {
    background-color: ${({ theme }) =>
      theme === 'dark' ? `${yellow}CC` : `${blue}CC`};
    border: 0.1rem solid
      ${({ theme }) => (theme === 'dark' ? `${yellow}CC` : `${blue}CC`)};
  }

  &:focus {
    outline: none;
    border: 0.1rem solid
      ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : darkBlue)};
    color: ${({ theme }) => (theme === 'dark' ? darkBlue : '#ffffff')};
  }
`;

const Button = ({
  onClick,
  disabled,
  loading,
  children,
  type = 'button',
  small,
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      theme={theme}
      small={small}
    >
      {loading ? <Spinner /> : children}
    </StyledButton>
  );
};

export default Button;
