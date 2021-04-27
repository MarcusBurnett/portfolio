import React from 'react';
import styled, { css } from 'styled-components/macro';
import { useTheme } from '../context/theme';
import { blue, darkBlue, midnightBlue, red, yellow } from '../styles/colors';
import { semiBold } from '../styles/fonts';
import Spacer from './Spacer';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  flex: 1;
  background-color: transparent;
  padding: 0 1rem;
  min-height: 5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid
    ${({ theme, error }) =>
      (error && red) || (theme === 'dark' && '#FFFFFF') || blue};
  -webkit-appearance: none;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : darkBlue)};

  &:focus {
    outline: none;
    ${({ $showStatus, value }) =>
      (!$showStatus || !value) &&
      css`
        border-color: ${({ theme }) => (theme === 'dark' ? yellow : darkBlue)};
      `};
  }
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const LabelContainer = styled.div`
  position: absolute;
  background-color: ${({ theme }) =>
    theme === 'dark' ? midnightBlue : '#ffffff'};
  padding-right: 0.5rem;
`;

const Label = styled.label`
  color: ${({ theme, error }) =>
    (error && red) || (theme === 'dark' && '#FFFFFF') || blue};
  font-weight: ${semiBold};
  font-size: 1.3rem;
`;

const Error = styled.span`
  color: ${red};
  visibility: ${({ error }) => (error ? 'auto' : 'hidden')};
`;

const Input = ({ name, label, onChange, value, error }) => {
  const { theme } = useTheme();

  return (
    <StyledInput>
      <Spacer size="m" />
      <InputContainer>
        <InputField
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          error={error}
          theme={theme}
        />
      </InputContainer>
      <Spacer size="s" />
      <Error error={error}>{error || '-'}</Error>
      <LabelContainer theme={theme}>
        <Label error={error} theme={theme} className={label} htmlFor={name}>
          {label}
        </Label>
      </LabelContainer>
    </StyledInput>
  );
};

export default Input;
