import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import Spacer from './Spacer';
import { developmentSkills, designSkills } from '../data/skills';
import { red, greyDark, greyMedium, darkBlue } from '../styles/colors';
import { useTheme } from '../context/theme';
import { xsmall } from '../styles/breakpoints';
import { fadeIn } from '../keyframes';

const StyledSkillsList = styled.div`
  padding: 5vh 0 5vh 3vw;
  opacity: 0;
  animation: 1s ${fadeIn} ease 0.5s forwards;

  @media screen and (max-width: ${xsmall}) {
    display: flex;
    padding: 0 20px;
  }
`;

const List = styled.ul`
  position: relative;

  @media screen and (max-width: ${xsmall}) {
    display: flex;
    margin-top: 10px;
    padding-right: 20px;
  }
`;

const Skill = styled.li`
  display: flex;
  height: 4.5rem;
  align-items: center;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.3)};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: ${xsmall}) {
    flex-direction: column;
    min-width: 21vw;
    height: auto;
  }
`;

const Icon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1rem;
  transform: ${({ isSelected }) => isSelected && 'translateX(1rem)'};
  transition: transform 0.3s ease;

  @media screen and (max-width: ${xsmall}) {
    transform: none;
    margin-right: 0;
  }
`;

const Title = styled.h2`
  font-weight: 2.2rem;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  transform: ${({ isSelected }) => isSelected && 'translateX(1rem)'};
  transition: opacity 0.3s ease, transform 0.3s ease;
  color: ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : darkBlue)};

  @media screen and (max-width: ${xsmall}) {
    margin: 10px 0 5px 0;
    transform: none;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Indicator = styled.div`
  width: 3px;
  height: 90%;
  border-radius: 1.5px;
  background-color: ${red};
  transform: ${({ isSelected }) => (isSelected ? 'scaleY(1)' : 'scaleY(0)')};
  transition: transform 0.3s ease;
  margin-top: 3px;

  @media screen and (max-width: ${xsmall}) {
    width: 90%;
    height: 3px;
    order: 1;
    transform: ${({ isSelected }) => (isSelected ? 'scaleX(1)' : 'scaleX(0)')};
  }
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => (theme === 'dark' ? greyMedium : greyDark)};
`;

const SkillsList = () => {
  const { pathname } = useLocation();
  const { theme } = useTheme();

  const renderList = (items) =>
    items.map((item) => {
      const isSelected = pathname === item.path;

      return (
        <Fragment key={item.title}>
          <StyledLink to={item.path}>
            <Skill key={item.title} isSelected={isSelected}>
              <Indicator isSelected={isSelected} />
              <Icon src={item.logos[theme]} isSelected={isSelected} />
              <Title theme={theme} isSelected={isSelected}>
                {item.title}
              </Title>
            </Skill>
          </StyledLink>
          <Spacer size="s" />
        </Fragment>
      );
    });

  return (
    <StyledSkillsList>
      <div>
        <CategoryTitle>DEVELOPMENT</CategoryTitle>
        <Spacer size="s" />
        <List>{renderList(developmentSkills)}</List>
      </div>
      <Spacer size="l" />
      <div>
        <CategoryTitle>DESIGN</CategoryTitle>
        <Spacer size="s" />
        <List>{renderList(designSkills)}</List>
      </div>
    </StyledSkillsList>
  );
};

export default SkillsList;
