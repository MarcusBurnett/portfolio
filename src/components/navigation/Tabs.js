import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Card from '../Card';
import {
  midnightBlueLight,
  midnightBlueDark,
  lightBlue,
  greyMedium,
  darkBlue,
  blue,
} from '../../styles/colors';
import { small, xsmall } from '../../styles/breakpoints';
import { useWindowDimensions, useTabs } from '../../hooks';
import { fadeInAndSlideRight } from '../../keyframes';
import useThemeSelect from '../../hooks/useThemeSelect';
import { regular, semiBold } from '../../styles/fonts';

const StyledTabs = styled.ul`
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideRight} ease forwards;

  @media screen and (max-width: ${small}) {
    width: 100%;
  }
`;

const Tab = styled.li`
  display: flex;
  transform: ${({ selected }) =>
    selected ? 'translate(0.5rem)' : 'translate(0)'};
  transition: transform 0.4s ease;
  margin-bottom: 20px;
  margin-right: 1px;

  @media screen and (max-width: ${small}) {
    width: 100%;
    transform: translateX(0);
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const StyledCard = styled(Card)`
  flex: 1;

  .background {
    border-color: ${({ colors, showBackground }) =>
      (showBackground && colors.backgroundBorder) || 'transparent'};
    border-width: 1px;

    @media screen and (max-width: ${small}) {
      border-width: 0;
    }
  }

  .card {
    display: flex;
    background-color: ${({ selected, colors }) =>
      selected ? colors.card.selected : colors.card.notSelected};
    box-shadow: ${({ selected }) =>
      selected ? '0 1rem 2rem #00000033' : 'none'};
    transition: all 0.4s ease;
    padding: 0;
    align-items: flex-start;
    width: 100%;

    @media screen and (max-width: ${small}) {
      box-shadow: ${({ selected }) =>
        selected ? '0 0.5rem 1rem #00000033' : 'none'};
    }
  }
`;

const Icon = styled.img`
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;

  @media screen and (max-width: ${small}) {
    margin-right: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem 3rem;
  text-decoration: none;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  font-weight: ${({ selected }) => (selected ? semiBold : regular)};
  transition: opacity 0.4s ease;
  pointer-events: ${({ selected }) => (selected ? 'none' : 'auto')};

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: ${small}) {
    padding: 2rem 3rem;
    font-size: 2rem;
    width: 100%;
    justify-content: flex-start;
  }

  @media screen and (max-height: ${xsmall}) {
    padding: 1rem 2rem;
  }
`;

const Tabs = ({ setMenuOpen }) => {
  const { height: windowHeight } = useWindowDimensions();
  const { tabs } = useTabs();
  const cardColors = useThemeSelect(
    {
      backgroundBorder: greyMedium,
      card: { selected: lightBlue, notSelected: blue },
    },
    {
      backgroundBorder: midnightBlueDark,
      card: { selected: midnightBlueLight, notSelected: darkBlue },
    }
  );

  const handleOnClick = () => {
    setTimeout(() => {
      setMenuOpen(false);
      window.scrollTo(0, windowHeight);
    }, 700);
  };

  return (
    <StyledTabs>
      {tabs.map((tab) => (
        <Tab key={tab.title} selected={tab.selected}>
          <StyledCard
            showBackground={tab.selected}
            selected={tab.selected}
            aria-selected={tab.selected}
            backgroundPosition="left"
            colors={cardColors}
            role="tab"
            tabindex={tab.selected ? 0 : -1}
          >
            <StyledLink
              onClick={handleOnClick}
              selected={tab.selected}
              to={tab.path}
            >
              <Icon src={tab.icon} alt={`${tab.title} icon`} />
              <span>{tab.title}</span>
            </StyledLink>
          </StyledCard>
        </Tab>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
