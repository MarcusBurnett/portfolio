import React from 'react';
import styled from 'styled-components/macro';
import { locationIcon } from '../../assets/images';
import { fadeInAndSlideLeft, fadeInAndSlideRight } from '../../keyframes';
import { small } from '../../styles/breakpoints';
import BackgroundImageFade from '../BackgroundImageFade';
import Spacer from '../Spacer';
import useDynamicColors from '../../hooks/useDynamicColors';

const Container = styled.div`
  min-height: ${({ minHeight = '100%' }) => minHeight};
  overflow: hidden;
  display: flex;
  flex: 1;
  justify-content: ${({ side }) =>
    side === 'left' ? 'flex-start' : 'flex-end'};
  align-items: center;
  position: relative;
`;

const Header = styled.h2`
  font-size: 3rem;
  color: ${({ color }) => color};
  transition: color 0.4s ease;
`;

const SubHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LocationIcon = styled.img`
  margin: ${({ side }) => (side === 'right' ? '0 0 0 1rem' : '0 1rem 0 0')};
`;

const Location = styled.span`
  color: ${({ color }) => color};

  transition: color 0.4s ease;
`;

const DateRange = styled.span`
  flex: 1;
  text-align: ${({ side }) => (side === 'right' ? 'left' : 'right')};

  color: ${({ color }) => color};
  transition: color 0.4s ease;
`;

const Description = styled.p`
  text-align: ${({ side }) => side};
  color: ${({ color }) => color};
  transition: color 0.4s ease;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  left: ${({ side }) => side === 'right' && 0};
  right: ${({ side }) => side === 'left' && 0};
  top: ${({ side }) => side === 'left' && 0};
  bottom: ${({ side }) => side === 'right' && 0};
  max-height: 100%;
  opacity: 0;
  animation: 1s
    ${({ side }) =>
      side === 'right' ? fadeInAndSlideRight : fadeInAndSlideLeft}
    ease 0.5s forwards;

  @media screen and (max-width: ${small}) {
    top: 0;
    bottom: unset;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 2vh 5vw;
  display: flex;
  flex-direction: column;
  opacity: 0;
  align-items: ${({ side }) => (side === 'left' ? 'flex-start' : 'flex-end')};
  animation: 0.8s
    ${({ side }) =>
      side === 'left' ? fadeInAndSlideRight : fadeInAndSlideLeft}
    ease 0.5s forwards;
  margin: ${({ side }) => (side === 'left' ? '10% 0 0 0' : '0 0 10% 0')};

  @media screen and (max-width: ${small}) {
    margin: 0;
    padding: 100px 5vw 50px 5vw;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: ${({ side }) =>
    side === 'left' ? 'flex-start' : 'flex-end'};
`;

const Item = ({ item, side, minHeight }) => {
  const { text } = useDynamicColors();
  const oppositeSide = side === 'right' ? 'left' : 'right';

  return (
    <Container side={side} minHeight={minHeight}>
      <BackgroundImageContainer side={side}>
        <BackgroundImageFade
          image={item.image}
          alt={item.title}
          side={oppositeSide}
        />
      </BackgroundImageContainer>
      <Content side={side}>
        <Header color={text}>{item.title}</Header>
        <Spacer size="s" />
        <SubHeader>
          {side === 'left' ? (
            <>
              <LocationContainer side={side}>
                <LocationIcon side={side} src={locationIcon} />
                <Location color={text}>{item.location}</Location>
              </LocationContainer>
              <DateRange side={side} color={text}>
                {item.dateRange}
              </DateRange>
            </>
          ) : (
            <>
              <DateRange side={side} color={text}>
                {item.dateRange}
              </DateRange>
              <LocationContainer side={side}>
                <Location color={text}>{item.location}</Location>
                <LocationIcon side={side} src={locationIcon} />
              </LocationContainer>
            </>
          )}
        </SubHeader>
        <Spacer size="s" />
        <Description color={text} side={side}>
          {item.description}
        </Description>
      </Content>
    </Container>
  );
};

export default Item;
