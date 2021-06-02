import React from 'react';
import styled from 'styled-components/macro';
import { blue, darkBlue, red } from '../../styles/colors';
import Spinner from '../Spinner';
import { medium } from '../../styles/fonts';
import { small as smallBreakpoint } from '../../styles/breakpoints';
import useThemeSelect from '../../hooks/useThemeSelect';

const StyledButton = styled.button`
  font-weight: ${medium};
  color: #ffffff;
  position: relative;
  min-height: ${({ small }) => (small ? '3rem' : '4.5rem')};
  width: ${({ small }) => (small ? 'auto' : '100%')};
  padding: 0 3rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background-color: ${red};
  font-size: 1.4rem;
  border: ${red};

  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    box-shadow: 0 0 0 1px ${red}CC;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ focusBorderColor }) => focusBorderColor};
  }

  @media screen and (max-width: ${smallBreakpoint}) {
    font-size: 1.8rem;
    min-height: ${({ small }) => (small ? '3.5rem' : '5rem')};
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
  const hoverBackgroundColor = useThemeSelect(`${blue}CC`, `${red}CC`);
  const focusBorderColor = useThemeSelect(darkBlue, '#FFFFFF');

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      hoverBackgroundColor={hoverBackgroundColor}
      focusBorderColor={focusBorderColor}
      small={small}
    >
      {loading ? <Spinner /> : children}
    </StyledButton>
  );
};

export default Button;
