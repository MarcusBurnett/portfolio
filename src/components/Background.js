import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { red } from '../styles/colors';
import { fadeIn } from '../keyframes';
import { small } from '../styles/breakpoints';

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

const lineStyles = {
  0: { left: '-25px', top: '-60px', opacity: 0.5 },
  1: { left: '-120px', top: '50px', opacity: 0.25 },
  2: { left: '-120px', top: '60px', opacity: 0.4 },
  3: { left: '-130px', top: '90px', opacity: 0.2 },
  4: { left: '-150px', top: '120px', opacity: 0.5 },
  5: { left: '-160px', top: '145px', opacity: 0.2 },
  6: { left: '0', top: '0px', opacity: 0.4 },
  7: { left: '20px', top: '0px', opacity: 0.2 },
  8: { left: '-80px', top: '120px', opacity: 0.5 },
  9: { left: '-100px', top: '150px', opacity: 0.2 },
  10: { left: '-20px', top: '90px', opacity: 0.5 },
  11: { left: '-20px', top: '110px', opacity: 0.3 },
  12: { left: '-80px', top: '200px', opacity: 0.2 },
  13: { left: '120px', top: '0px', opacity: 0.4 },
  14: { left: '50px', top: '100px', opacity: 0.2 },
  15: { left: '-20px', top: '190px', opacity: 0.3 },
  16: { left: '-160px', top: '300px', opacity: 0.2 },
  17: { left: '-140px', top: '350px', opacity: 0.3 },
  18: { left: '100px', top: '100px', opacity: 0.15 },
  19: { left: '190px', top: '50px', opacity: 0.3 },
  20: { left: '270px', top: '0px', opacity: 0.2 },
  21: { left: '20px', top: '220px', opacity: 0.1 },
  22: { left: '-50px', top: '320px', opacity: 0.2 },
  23: { left: '50px', top: '250px', opacity: 0.15 },
  24: { left: '220px', top: '100px', opacity: 0.3 },
  25: { left: '200px', top: '140px', opacity: 0.1 },
  26: { left: '-10px', top: '350px', opacity: 0.25 },
  27: { left: '-100px', top: '480px', opacity: 0.12 },
  28: { left: '100px', top: '280px', opacity: 0.08 },
  29: { left: '300px', top: '80px', opacity: 0.15 },
  30: { left: '180px', top: '240px', opacity: 0.1 },
  31: { left: '20px', top: '400px', opacity: 0.07 },
  32: { left: '-40px', top: '500px', opacity: 0.05 },
  33: { left: '160px', top: '300px', opacity: 0.03 },
  34: { left: '400px', top: '20px', opacity: 0.02 },
  35: { left: '150px', top: '350px', opacity: 0.01 },
};

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
