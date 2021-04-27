import React from 'react';
import styled from 'styled-components/macro';
import { midnightBlue } from '../styles/colors';

const StyledRight = styled.div`
  background-color: ${midnightBlue};
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Right = () => (
  <StyledRight>
    <h1>Right</h1>
  </StyledRight>
);

export default Right;
