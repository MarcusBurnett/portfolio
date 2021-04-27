import React from 'react';
import styled from 'styled-components/macro';
import { googlePlayIcon } from '../assets/images';

const Container = styled.div`
  display: inline-flex;
`;

const Image = styled.img`
  max-height: 5rem;
`;

const GooglePlay = () => (
  <Container>
    <a target="_blank" rel="noopener noreferrer" href="">
      <Image src={googlePlayIcon} />
    </a>
  </Container>
);

export default GooglePlay;
