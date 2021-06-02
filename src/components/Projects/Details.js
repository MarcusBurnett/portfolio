import React from 'react';
import styled from 'styled-components/macro';
import skills from '../../data/skills';
import { fadeInAndSlideUp } from '../../keyframes';
import Spacer from '../Spacer';
import CardList from '../CardList';
import { xsmall } from '../../styles/breakpoints';
import { medium } from '../../styles/fonts';
import { darkBlue } from '../../styles/colors';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} ease 0.7s forwards;
`;

const DescriptionContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.7s forwards;
`;

const ToolsContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.8s forwards;
  z-index: 2;
`;

const Logo = styled.img`
  max-width: 16rem;
  max-height: 8rem;
  align-self: flex-start;
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.6s forwards;
`;

const StyledCardList = styled(CardList)`
  .styled-card {
    width: 5rem;
    height: 5rem;
    padding: 0;

    @media screen and (max-width: ${xsmall}) {
      width: 20vw;
      height: 20vw;
      margin: 5vw;
    }
  }

  .tooltip {
    top: 7rem;

    @media screen and (max-width: ${xsmall}) {
      top: 27vw;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: ${medium};
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.7s forwards;
  color: ${({ theme }) => (theme === 'light' ? darkBlue : '#FFFFFF')};
`;

const Description = styled.p`
  color: ${({ theme }) => (theme === 'light' ? darkBlue : '#FFFFFF')};
`;

const Details = ({ project }) => (
  <>
    <Logo src={project.logos?.default} alt={`${project.title} logo`} />
    <Spacer size="xxxl" />
    <Title theme={project.theme}>{project.title}</Title>
    <Spacer size="s" />
    <DescriptionContainer>
      <Description theme={project.theme}>{project.description}</Description>
    </DescriptionContainer>
    <Spacer size="l" />
    <ToolsContainer>
      <ListContainer>
        <StyledCardList
          items={skills?.filter((item) => project.skills?.includes(item.title))}
          borderColor={project.colors?.tint}
        />
      </ListContainer>
    </ToolsContainer>
  </>
);

export default Details;
