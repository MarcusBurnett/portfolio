import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { arrowIcon, showAllIcon } from '../../assets/images';
import { small } from '../../styles/breakpoints';
import Spacer from '../Spacer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${small}) {
    transform: rotate(-90deg);
    margin-right: 40px;
  }
`;

const ShowAllIcon = styled.img`
  cursor: pointer;
`;

const Indicator = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: ${({ selected }) => (selected ? 1 : 0.4)};
  margin: 0.5rem 0;
`;

const Arrow = styled.img`
  width: 20px;
  height: 20px;
  margin: ${({ side }) => (side === 'top' ? '0 0 10px 0' : '10px 0 0 0')};
  transform: ${({ side }) =>
    ` scale(1) rotate(${side === 'top' ? '270deg' : '90deg'})`};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.1s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    transform: ${({ side, disabled }) =>
      `scale(${disabled ? 1 : 1.1}) rotate(${
        side === 'top' ? '270deg' : '90deg'
      })`};
  }
`;

const SlideIndicator = ({ slides, openList }) => {
  const { pathname } = useLocation();
  const selectedIndex = slides.findIndex((slide) => slide.path === pathname);

  const getNewPath = (direction) =>
    direction === 'back'
      ? slides[selectedIndex - 1]?.path || pathname
      : slides[selectedIndex + 1]?.path || pathname;

  return (
    <Container>
      <ShowAllIcon
        src={showAllIcon}
        alt="list projects"
        onClick={openList}
        onKeyPress={openList}
        tabIndex={0}
      />
      <Spacer size="l" />
      <Link
        disabled={selectedIndex === 0}
        to={getNewPath('back')}
        aria-label="view project"
      >
        <Arrow src={arrowIcon} side="top" alt="arrow up" />
      </Link>
      {slides.map((slide, i) => (
        <Link
          key={slide.title}
          disabled={selectedIndex === 0}
          to={slides[i]?.path}
          aria-label="view project"
        >
          <Indicator key={slide.title} selected={i === selectedIndex} />
        </Link>
      ))}
      <Link
        disabled={selectedIndex === slides.length - 1}
        to={getNewPath('forward')}
        aria-label="view project"
      >
        <Arrow src={arrowIcon} side="bottom" alt="arrow down" />
      </Link>
    </Container>
  );
};

export default SlideIndicator;
