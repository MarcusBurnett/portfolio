import React from 'react';
import styled from 'styled-components/macro';
import { small } from '../styles/breakpoints';
import { red, lightBlue, darkBlue, blue } from '../styles/colors';
import { semiBold } from '../styles/fonts';
import Spacer from './Spacer';
import { useDynamicColors } from '../hooks';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  flex: 1;
  background-color: transparent;
  padding: 0 1rem;
  min-height: 4rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${({ borderColor }) => borderColor};
  -webkit-appearance: none;
  color: ${({ color }) => color};
  transition: border 0.4s ease, box-shadow 0.4s ease;

  &:focus {
    outline: none;
    border-color: ${({ borderColorFocus }) => borderColorFocus};
    box-shadow: 0 0 0 1px ${({ borderColorFocus }) => borderColorFocus};
  }

  @media screen and (max-width: ${small}) {
    font-size: 2rem;
    min-height: 5rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const LabelContainer = styled.div`
  position: absolute;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding-right: 0.5rem;
  margin-top: 0.5rem;
  margin-left: -0.1rem;
  font-size: 1.3rem;
  border-radius: 3px 3px 3px 0;
  transition: background-color 0.4s ease;
`;

const Label = styled.label`
  color: ${({ color, error }) => (error && red) || color};
  font-weight: ${semiBold};
  transition: color 0.4s ease;

  @media screen and (max-width: ${small}) {
    font-size: 1.6rem;
  }
`;

const Error = styled.span`
  color: ${red};
  visibility: ${({ error }) => (error ? 'auto' : 'hidden')};
`;

const Input = ({ name, label, onChange, value, error }) => {
  const {
    text,
    inputBorder,
    inputBorderFocus,
    page,
    inputLabel,
  } = useDynamicColors(
    { inputBorderFocus: darkBlue, inputLabel: blue },
    { inputBorderFocus: lightBlue, inputLabel: '#FFFFFF' }
  );

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
          borderColor={(error && red) || inputBorder}
          borderColorFocus={inputBorderFocus}
          color={text}
        />
      </InputContainer>
      <Spacer size="s" />
      <Error error={error}>{error || '-'}</Error>
      <LabelContainer backgroundColor={page}>
        <Label
          error={error}
          color={inputLabel}
          className={label}
          htmlFor={name}
        >
          {label}
        </Label>
      </LabelContainer>
    </StyledInput>
  );
};

export default Input;
