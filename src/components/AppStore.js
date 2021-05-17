import React from 'react';
import styled from 'styled-components/macro';
import { appStoreIcon } from '../assets/images';

const Container = styled.div`
  display: inline-flex;
`;

const Image = styled.img`
  max-height: 5rem;
`;

const AppStore = () => (
  <Container>
    <a target="_blank" rel="noopener noreferrer" href="/">
      <Image src={appStoreIcon} />
    </a>
  </Container>
);

export default AppStore;
