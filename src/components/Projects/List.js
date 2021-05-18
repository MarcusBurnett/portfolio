import React from 'react';
import styled from 'styled-components/macro';
import ReactModal from 'react-modal';
import CardList from '../CardList';
import { fadeInAndSlideUp } from '../../keyframes';
import { xsmall } from '../../styles/breakpoints';
import projects from '../../data/projects';
import Spacer from '../Spacer';
import { crossIconBlue, crossIconWhite } from '../../assets/images';
import useDynamicColors from '../../hooks/useDynamicColors';
import useThemeSelect from '../../hooks/useThemeSelect';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

const ReactModalAdapter = ({ className, modalClassName, ...props }) => (
  <ReactModal
    className={modalClassName}
    portalClassName={className}
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
  />
);

const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'overlay',
  modalClassName: 'modal',
})`
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 400ms ease;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Content {
    transform: scale(0);
    transition: transform 400ms ease;
    outline: none;
  }

  .ReactModal__Content--after-open {
    transform: scale(1);
  }

  .ReactModal__Content--before-close {
    transform: scale(0);
  }

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 100%;
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    border: 0;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 0.5rem;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(26, 27, 41, 0.5);
    z-index: 10;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ListContainer = styled.div`
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} ease 0.3s forwards;
  justify-content: center;
`;

const StyledCardList = styled(CardList)`
  .styled-card {
    width: 7rem;
    height: 7rem;
    padding: 0;

    @media screen and (max-width: ${xsmall}) {
      width: 20vw;
      height: 20vw;
    }
  }

  .tooltip {
    top: 9rem;

    @media screen and (max-width: ${xsmall}) {
      top: 27vw;
    }
  }
`;

const Header = styled.h1`
  color: ${({ color }) => color};
  font-size: 2.2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CrossIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const List = ({ isOpen, toggle }) => {
  const { page, text } = useDynamicColors();
  const cross = useThemeSelect(crossIconBlue, crossIconWhite);

  return (
    <StyledModal backgroundColor={page} isOpen={isOpen} onRequestClose={toggle}>
      <HeaderContainer>
        <Header color={text}>Projects</Header>
        <CrossIcon
          src={cross}
          alt="close modal"
          onClick={toggle}
          onKeyPress={toggle}
          tabIndex={0}
        />
      </HeaderContainer>
      <Spacer size="s" />
      <ListContainer>
        <StyledCardList items={projects} onClick={toggle} />
      </ListContainer>
    </StyledModal>
  );
};

export default List;
