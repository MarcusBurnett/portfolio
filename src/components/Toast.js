import React, { useEffect, useState, memo } from 'react';
import styled from 'styled-components/macro';
import { useTheme } from '../context/theme';
import { useToast } from '../context/toast';
import { darkBlue, greyLight } from '../styles/colors';
import Button from './form/Button';
import Card from './Card';
import { medium } from '../styles/fonts';
import Spacer from './Spacer';

const Container = styled.div`
  position: fixed;
  width: 100%;
  max-width: 30rem;
  top: 2rem;
  transform: ${({ showToast }) =>
    `translateY(${showToast ? '0rem' : '-20rem'})`};
  transition: transform 0.5s ease;
  align-self: center;
  margin: 0 2rem;

  @media screen and (min-width: 900px) {
    max-width: 60rem;
    margin: 0 25%;
  }
`;

const Text = styled.p`
  color: ${({ color }) => color};
  font-size: 1.8rem;
  font-weight: ${medium};
  margin-right: 1rem;

  @media screen and (min-width: 700px) {
    font-size: 1.6rem;
  }
`;

const StyledCard = styled(Card)`
  padding: 2rem;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (min-width: 700px) {
    padding: 1.5rem;
  }
`;

const Content = styled.div`
  flex: 1;
  min-height: 4rem;
  align-self: flex-start;
  display: flex;

  @media screen and (min-width: 700px) {
    font-size: 1.6rem;
    min-height: 2rem;
  }
`;

const Toast = () => {
  const { message, hideToast, visible } = useToast();
  const [showToast, setShowToast] = useState(visible);
  const { theme } = useTheme();

  const onClickOK = () => {
    hideToast();
    setShowToast(false);
  };

  useEffect(() => {
    if (visible) {
      setShowToast(true);
    } else {
      setTimeout(() => {
        setShowToast(false);
      }, 500);
    }
  }, [visible]);

  return (
    <Container showToast={showToast}>
      <StyledCard
        color={(theme === 'dark' && darkBlue) || greyLight}
        padding="2rem 3rem"
        position="center"
      >
        <Content>
          <Text color={(theme === 'dark' && '#ffffff') || darkBlue}>
            {message}
          </Text>
        </Content>
        <Spacer size="s" />
        <Button small onClick={onClickOK}>
          OK
        </Button>
      </StyledCard>
    </Container>
  );
};

export default memo(Toast);
