import React from 'react';
import styled from 'styled-components/macro';
import { red } from '../styles/colors';

const StyledToolTip = styled.div`
  position: absolute;
  padding: 0.1rem 0.5rem;
  background-color: ${red};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${red};
    top: -5px;
  }
`;

const Text = styled.span`
  font-size: 1.4rem;
  text-align: center;
`;

const ToolTip = ({ children, className }) => (
  <StyledToolTip className={className}>
    <Text>{children}</Text>
  </StyledToolTip>
);

export default ToolTip;
