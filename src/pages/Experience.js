import React from 'react';
import styled from 'styled-components/macro';
import ExperienceItem from '../components/ExperienceItem';
import { useTheme } from '../context/theme';
import experience from '../data/experience';
import { midnightBlue } from '../styles/colors';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) =>
    theme === 'dark' ? midnightBlue : '#FFFFFF'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Experience = () => {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      {experience.map((item, i) => (
        <div key={item.title}>
          <ExperienceItem
            item={item}
            side={i % 2 === 0 ? 'left' : 'right'}
            minHeight={`${100 / experience.length}%`}
          />
        </div>
      ))}
    </Container>
  );
};

export default Experience;
