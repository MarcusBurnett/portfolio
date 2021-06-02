import React from 'react';
import styled from 'styled-components/macro';
import { footballIcon, projectsIcon, travelIcon } from '../../assets/images';
import ToolTip from '../ToolTip';
import { xsmall } from '../../styles/breakpoints';

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;

  .tooltip {
    top: 6.2rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    margin-left: 15px;

    @media screen and (max-width: ${xsmall}) {
      top: 8rem;
    }
  }

  &:hover .tooltip {
    display: flex;
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 2.6rem;
  height: 2.6rem;
  margin-left: 15px;
  margin-top: 10px;

  @media screen and (max-width: ${xsmall}) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;

const Hobbies = () => {
  const items = [
    { name: 'Football', icon: footballIcon },
    { name: 'Travel', icon: travelIcon },
    { name: 'Coding', icon: projectsIcon },
  ];

  return (
    <List>
      {items.map((item) => (
        <Item key={item.name}>
          <Image src={item.icon} alt={item.name} />
          <ToolTip className="tooltip">{item.name}</ToolTip>
        </Item>
      ))}
    </List>
  );
};

export default Hobbies;
