import React from 'react';
import styled from 'styled-components/macro';
import { small } from '../../styles/breakpoints';
import { blue, darkBlue, red, lightBlue } from '../../styles/colors';
import { semiBold } from '../../styles/fonts';
import Spacer from '../Spacer';
import { useDynamicColors } from '../../hooks';

const StyledTextarea = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextareaField = styled.textarea`
  flex: 1;
  overflow-y: scroll;
  background-color: transparent;
  padding: 1rem 1rem 0;
  min-height: 4rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${({ borderColor }) => borderColor};
  -webkit-appearance: none;
  color: ${({ color }) => color};
  transition: border 0.4s ease;

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

const TextareaContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const LabelContainer = styled.div`
  position: absolute;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding-right: 0.5rem;
  margin-top: 0.5rem;
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

const Textarea = ({ name, label, onChange, value, error }) => {
  const { text, inputBorder, inputBorderFocus, page, inputLabel } =
    useDynamicColors(
      { inputBorderFocus: darkBlue, inputLabel: blue },
      { inputBorderFocus: lightBlue, inputLabel: '#FFFFFF' }
    );

  return (
    <StyledTextarea>
      <Spacer size="m" />
      <TextareaContainer>
        <TextareaField
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          error={error}
          rows={5}
          borderColor={(error && red) || inputBorder}
          borderColorFocus={inputBorderFocus}
          color={text}
        />
      </TextareaContainer>
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
    </StyledTextarea>
  );
};

export default Textarea;
