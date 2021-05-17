import React from 'react';
import styled from 'styled-components/macro';
import skills from '../../data/skills';
import { fadeInAndSlideUp } from '../../keyframes';
import Spacer from '../Spacer';
import CardList from '../CardList';
import { xsmall } from '../../styles/breakpoints';

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
`;

const Logo = styled.img`
  max-width: 12rem;
  max-height: 12rem;
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.6s forwards;
`;

const StyledCardList = styled(CardList)`
  .styled-card {
    width: 5rem;
    height: 5rem;
    padding: 0;

    @media screen and (max-width: ${xsmall}) {
      width: 25vw;
      height: 25vw;
    }
  }

  .tooltip {
    top: 7rem;

    @media screen and (max-width: ${xsmall}) {
      top: 27vw;
    }
  }
`;

const Details = ({ project }) => (
  <>
    <Logo src={project.logos?.default} />
    <Spacer size="xxxl" />
    <DescriptionContainer>
      <p>{project.description}</p>
    </DescriptionContainer>
    <Spacer size="xxxl" />
    <ToolsContainer>
      <ListContainer>
        <StyledCardList
          items={skills?.filter((item) => project.skills?.includes(item.title))}
          backgroundColor={project.colors?.dark}
          borderColor={project.colors?.tint}
        />
      </ListContainer>
    </ToolsContainer>
  </>
);

export default Details;
