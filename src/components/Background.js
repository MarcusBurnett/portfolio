import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { red } from '../styles/colors';
import { fadeIn } from '../keyframes';
import { small } from '../styles/breakpoints';
import lineStyles from '../data/backgroundLineStyles';

const animate = keyframes`
0% {
	transform: rotateZ(-45deg) translate(0, 0);
  opacity: 0;
}
50% {
  opacity: 0.3;
}
100% {
  transform: rotateZ(-45deg) translate(200%, 200%);
  opacity: 0;
}
`;

const StyledBackground = styled.div`
  display: flex;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  animation: 1s ${fadeIn} ease 0.5s forwards;
`;

const Line = styled.div`
  height: 1px;
  background-color: ${red};
  position: absolute;
  width: 200px;
  top: ${({ index }) => lineStyles[index]?.top};
  left: ${({ index }) => lineStyles[index]?.left};
  opacity: ${({ index }) => lineStyles[index]?.opacity};
  transition: ${({ index }) =>
    `transform ${Math.max(0.3, index * 0.05)}s ease`};
  transform: rotateZ(-45deg)
    ${({ x, y, index }) => {
      if (
        x > Number(lineStyles[index]?.left.slice(0, -2)) &&
        x < Number(lineStyles[index]?.left.slice(0, -2)) + 200 &&
        y > Number(lineStyles[index]?.top.slice(0, -2)) &&
        y < Number(lineStyles[index]?.top.slice(0, -2)) + 200
      ) {
        return `translateX(${index * 3}px)`;
      }

      return 'translateX(0)';
    }};

  @media screen and (max-width: ${small}) {
    animation: ${({ index }) => 5 + index}s linear
      ${({ index }) => (index % 2 === 0 ? 'alternate-reverse' : 'alternate')}
      infinite ${animate};
  }
`;

const Background = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const renderLines = () => {
    const lines = [];

    for (let i = 0; i <= 35; i += 1) {
      lines.push(i);
    }

    return lines.map((line) => (
      <Line
        index={line}
        key={line}
        x={mouseCoordinates.x}
        y={mouseCoordinates.y}
      />
    ));
  };

  const onMouseMove = ({ screenX, screenY }) =>
    setMouseCoordinates({ x: screenX, y: screenY });

  return (
    <StyledBackground onMouseMove={onMouseMove}>
      {renderLines()}
    </StyledBackground>
  );
};

export default Background;
