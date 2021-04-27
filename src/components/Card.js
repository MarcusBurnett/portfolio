import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { darkBlue } from '../styles/colors';

const StyledCard = styled.div`
  position: relative;
  padding: ${({ padding = '2rem' }) => padding};
  border-radius: ${({ position }) =>
    (position === 'left' && '0 1rem 1rem 0') ||
    (position === 'right' && '1rem 0 0 1rem') ||
    '1rem'};
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  align-items: ${({ position }) =>
    (position === 'left' && 'flex-end') ||
    (position === 'right' && 'flex-start') ||
    'center'};
  box-shadow: 0 1rem 2rem #00000033;
  margin: ${({ position }) =>
    (position === 'left' && '0 2rem 0 0') ||
    (position === 'right' && '0 0 0 2rem') ||
    (position === 'center' && '0 1rem')};
  box-sizing: border-box;
`;

const Card = ({
  children,
  color = darkBlue,
  position = 'left',
  padding,
  className,
}) => (
  <StyledCard
    className={className}
    color={color}
    position={position}
    padding={padding}
  >
    {children}
  </StyledCard>
);

export default memo(Card);
