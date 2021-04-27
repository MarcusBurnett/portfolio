import React from 'react';
import styled from 'styled-components/macro';
import { darkBlue } from '../styles/colors';

const StyledLeft = styled.div`
  background-color: ${darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  padding: 5vw 0rem 10vh 5vw;
`;

const Content = styled.div``;

const Title = styled.h1`
  font-size: 5rem;
`;

const Tabs = styled.nav`
  align-self: flex-end;
`;
const TabList = styled.ul``;
const Tab = styled.li``;

const tabs = [
  { title: 'My Story' },
  { title: 'Skills' },
  { title: 'Experience' },
  { title: 'Projects' },
  { title: 'Contact' },
];

const Left = () => (
  <StyledLeft>
    <Tabs>
      <TabList />
      {tabs.map((tab) => (
        <Tab>{tab.title}</Tab>
      ))}
    </Tabs>
    <Content>
      <Title>Marcus Burnett</Title>
    </Content>
  </StyledLeft>
);

export default Left;
