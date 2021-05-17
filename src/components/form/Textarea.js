import React from 'react';
import styled, { css } from 'styled-components/macro';
import { useTheme } from '../../context/theme';
import { small } from '../../styles/breakpoints';
import { blue, darkBlue, midnightBlue, red } from '../../styles/colors';
import { semiBold } from '../../styles/fonts';
import Spacer from '../Spacer';

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
  border: 0.1rem solid
    ${({ theme, error }) =>
      (error && red) || (theme === 'dark' && '#FFFFFF') || blue};
  -webkit-appearance: none;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : darkBlue)};
  transition: border 0.4s ease;

  &:focus {
    outline: none;
    ${({ $showStatus, value }) =>
      (!$showStatus || !value) &&
      css`
        border-color: ${red};
      `};
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
  background-color: ${({ theme }) =>
    theme === 'dark' ? midnightBlue : '#ffffff'};
  padding-right: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.3rem;
  border-radius: 3px 3px 3px 0;
  transition: background-color 0.4s ease;
`;

const Label = styled.label`
  color: ${({ theme, error }) =>
    (error && red) || (theme === 'dark' && '#FFFFFF') || blue};
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
  const { theme } = useTheme();

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
          theme={theme}
          rows={5}
        />
      </TextareaContainer>
      <Spacer size="s" />
      <Error error={error}>{error || '-'}</Error>
      <LabelContainer theme={theme}>
        <Label error={error} theme={theme} className={label} htmlFor={name}>
          {label}
        </Label>
      </LabelContainer>
    </StyledTextarea>
  );
};

export default Textarea;
