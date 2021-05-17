import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useDynamicColors } from '../hooks';

const Container = styled.div`
  display: flex;
  position: relative;
`;

const StyledCard = styled.div`
  flex: 1;
  position: relative;
  padding: ${({ padding = '1rem' }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1rem 2rem #00000033;
  box-sizing: border-box;
  transition: background-color 0.4s ease;
`;

const Background = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  border-color: ${({ borderColor }) => borderColor};
  border-style: solid;
  border-width: 0;
  top: 5px;
  right: ${({ position }) => position === 'left' && '5px'};
  left: ${({ position }) => position === 'right' && '5px'};
  transition: all 0.5s ease;
`;

const Card = ({
  children,
  className,
  showBackground,
  backgroundPosition = 'right',
}) => {
  const { card, border } = useDynamicColors();

  return (
    <Container className={className}>
      <Background
        position={backgroundPosition}
        visible={showBackground}
        borderColor={border}
        className="background"
      />
      <StyledCard backgroundColor={card} className="card">
        {children}
      </StyledCard>
    </Container>
  );
};

export default memo(Card);
