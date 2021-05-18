import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTheme } from '../context/theme';
import ToolTip from './ToolTip';
import Card from './Card';
import { greyLight, red } from '../styles/colors';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const CardContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  .tooltip {
    top: 9rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .tooltip {
    display: flex;
    opacity: 1;
  }
`;

const StyledCard = styled(Card)`
  width: 7rem;
  height: 7rem;
  margin: 1rem;

  .card {
    justify-content: center;
    align-items: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
  }

  .background {
    border-width: 1px;
    border-color: ${({ borderColor }) => borderColor};
  }

  &:hover .background {
    border-color: ${red};
  }
`;

const CardList = ({
  items = [],
  backgroundColor,
  borderColor,
  className,
  onClick,
}) => {
  const { theme } = useTheme();
  const { pathname } = useLocation();

  return (
    <List className={className}>
      {items.map((item) => (
        <CardContainer className="card-container" key={item.title}>
          <Link
            disabled={!item.path}
            to={item.path || pathname}
            onClick={onClick}
            aria-label={`View ${item.title}`}
          >
            <StyledCard
              theme={theme}
              backgroundPosition="left"
              key={item.title}
              className="styled-card"
              backgroundColor={
                backgroundColor || (theme === 'light' && greyLight)
              }
              borderColor={borderColor}
            >
              <img src={item.logos?.[theme]} alt={item.title} />
            </StyledCard>
          </Link>
          <ToolTip className="tooltip">{item.title}</ToolTip>
        </CardContainer>
      ))}
    </List>
  );
};

export default CardList;
