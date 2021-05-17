import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { red } from '../styles/colors';
import Card from './Card';
import { profilePicture } from '../assets/images';
import Spacer from './Spacer';
import Countdown from './Countdown';
import { xsmall } from '../styles/breakpoints';
import { fadeInAndSlideUp } from '../keyframes';

const Details = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.3s ease forwards;

  @media screen and (max-width: ${xsmall}) {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledCard = styled(Card)`
  flex: unset;
`;

const ProfilePictureCard = styled(StyledCard)`
  margin-top: 2rem;
  z-index: 2;

  .card {
    padding: 0;
    width: 10rem;
    height: 10rem;
  }

  .background {
    border-color: ${red};
    border-width: 1px;
  }

  @media screen and (max-width: ${xsmall}) {
    margin-top: 0;
    margin-bottom: -1rem;
  }
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
`;

const DetailsItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: ${xsmall}) {
    margin: 0.5rem 0;
  }
`;

const DetailsList = styled(StyledCard)`
  flex: 1;
  margin-left: -2rem;

  .card {
    flex: 1;
    padding: 1rem 3rem 1rem 5rem;

    @media screen and (max-width: ${xsmall}) {
      padding: 3rem 2rem 2rem;
    }
  }

  .background {
    border-width: 1px;
  }

  @media screen and (max-width: ${xsmall}) {
    width: 100%;
    margin-left: 0;
  }
`;

const Text = styled.span`
  @media screen and (max-width: ${xsmall}) {
    font-size: 2rem;
  }
`;

const detailsListItems = [
  { label: 'Name:', value: <Text>Marcus Burnett</Text> },
  { label: 'Place of Birth:', value: <Text>Bolton, UK</Text> },
  { label: 'Age:', value: <Countdown date={new Date(1995, 9, 20)} /> },
];

const MyStoryDetails = () => (
  <Details>
    <ProfilePictureCard backgroundPosition="left">
      <ProfilePicture src={profilePicture} alt="profile" />
    </ProfilePictureCard>
    <DetailsList>
      {detailsListItems?.map((item, i) => (
        <Fragment key={item.label}>
          <DetailsItem>
            <Text>{item.label}</Text>
            {item.value}
          </DetailsItem>
          {i < detailsListItems.length - 1 && <Spacer />}
        </Fragment>
      ))}
    </DetailsList>
  </Details>
);

export default MyStoryDetails;
