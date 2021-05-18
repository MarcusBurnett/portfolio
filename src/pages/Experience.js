import React from 'react';
import styled from 'styled-components/macro';
import Item from '../components/Experience/Item';
import experience from '../data/experience';
import useDynamicColors from '../hooks/useDynamicColors';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Experience = () => {
  const { page } = useDynamicColors();

  return (
    <Container backgroundColor={page}>
      {experience.map((item, i) => (
        <div key={item.title}>
          <Item
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
