import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { externalLinkIcon, profilePicture } from '../../assets/images';
import Spacer from '../Spacer';
import Countdown from './Countdown';
import { xsmall, medium, small, large } from '../../styles/breakpoints';
import { fadeInAndSlideUp } from '../../keyframes';
import { useTheme } from '../../context/theme';
import useThemeSelect from '../../hooks/useThemeSelect';
import Hobbies from './Hobbies';
import useDynamicColors from '../../hooks/useDynamicColors';
import { greyDark, greyMedium, red } from '../../styles/colors';
import { medium as mediumFont, regular } from '../../styles/fonts';

const StyledDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.3s ease forwards;
  flex: 1;

  @media screen and (max-width: ${large}) and (min-width: ${small}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${xsmall}) {
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
  }
`;

const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* align-items: flex-end; */

  @media screen and (max-width: ${xsmall}) {
    margin: 0.5rem 0;
  }
`;

const DetailsList = styled.div`
  flex: 1;
  min-height: 50vh;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: ${medium}) {
    margin-bottom: 20px;
    margin-top: 50px;
  }

  @media screen and (max-width: ${xsmall}) {
    margin-top: -20px;
    width: 100%;
    margin-left: 0;
  }
`;

const Text = styled.span`
  font-size: 2rem;
  font-weight: ${mediumFont};

  @media screen and (max-width: ${xsmall}) {
    font-size: 2.6rem;
  }
`;

const Label = styled.span`
  font-size: 1.8rem;
  font-weight: ${regular};

  @media screen and (max-width: ${xsmall}) {
    font-size: 1.8rem;
  }
`;

const ProfilePictureContainer = styled.div`
  position: absolute;
  top: -3vh;
  right: -3vw;
  width: 100%;
  /* height: 100%; */

  .image {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${small}) {
    top: -90px;
    /* left: -20px; */
    /* width: 220px;
    height: 220px; */
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const ImageFade = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  transition: opacity 0.4s ease;
`;

const HorizontalImageFadeLight = styled(ImageFade)`
  background: linear-gradient(
    -90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.3) 50%
  );
  opacity: ${({ opacity }) => opacity};
`;

const VerticalImageFadeLight = styled(ImageFade)`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.3) 50%
  );
  opacity: ${({ opacity }) => opacity};
`;

const HorizontalImageFadeDark = styled(ImageFade)`
  background: linear-gradient(
    90deg,
    rgba(26, 27, 41, 1) 0%,
    rgba(26, 27, 41, 0.3) 100%
  );
  opacity: ${({ opacity }) => opacity};
`;

const VerticalImageFadeDark = styled(ImageFade)`
  background: linear-gradient(
    0deg,
    rgba(26, 27, 41, 1) 0%,
    rgba(26, 27, 41, 0.3) 50%
  );
  opacity: ${({ opacity }) => opacity};
`;

const detailsListItems = [
  { label: 'Age', value: <Countdown date={new Date(1995, 9, 20)} /> },
  { label: 'Nationality', value: <Text>British</Text> },
  { label: 'Lives in', value: <Text>Lent, Netherlands</Text> },
  { label: 'Languages', value: <Text>English (Native), Dutch (Basic)</Text> },
  { label: 'Hobbies', value: <Hobbies /> },
];

const Background = styled.div`
  opacity: ${({ themeChanging }) => (themeChanging ? 0 : 1)};
  transition: ${({ themeChanging }) =>
    themeChanging ? '' : 'opacity 0.4s ease'};
  height: 70vh;
  width: 70vh;
  position: absolute;
  top: 0;
  right: 0;
`;

const QuoteContainer = styled.div`
  position: relative;
  /* flex: 1; */
  margin-top: 80px;
  margin-bottom: 30px;
  margin-left: 50px;
  max-width: 800px;

  @media screen and (max-width: ${large}) and (min-width: ${small}) {
    order: 2;
    margin-top: 40px;
  }

  @media screen and (max-width: ${medium}) {
    margin-top: 100px;
  }

  @media screen and (max-width: ${xsmall}) {
    order: 2;
    margin: 20px 0 0;
  }
`;

const Quote = styled.p`
  line-height: 3.5rem;
  color: ${({ color }) => color};
  font-size: 2rem;

  @media screen and (max-width: ${xsmall}) {
    font-size: 2rem;
    line-height: 3.5rem;
  }
`;

const QuotedBy = styled.a`
  font-weight: ${mediumFont};
  color: ${({ color }) => color};
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 1.6rem;

  &:hover {
    color: ${red};
  }
`;

const ExternalLinkIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 8px;
`;

const QuotedByContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Details = () => {
  const { themeChanging } = useTheme();
  const opacity = useThemeSelect({ light: 1, dark: 0 }, { light: 0, dark: 1 });
  const { text } = useDynamicColors({ text: greyDark }, { text: greyMedium });

  return (
    <StyledDetails>
      <Background themeChanging={themeChanging}>
        <ProfilePictureContainer backgroundPosition="left">
          <Image src={profilePicture} alt="profile picture" />
          <HorizontalImageFadeLight opacity={opacity.light} />
          <VerticalImageFadeLight opacity={opacity.light} />
          <HorizontalImageFadeDark opacity={opacity.dark} />
          <VerticalImageFadeDark opacity={opacity.dark} />
        </ProfilePictureContainer>
      </Background>
      <DetailsList>
        {detailsListItems?.map((item, i) => (
          <Fragment key={item.label}>
            <DetailsItem>
              <Label>{item.label}</Label>
              {item.value}
            </DetailsItem>
            {i < detailsListItems.length - 1 && <Spacer size="l" />}
          </Fragment>
        ))}
      </DetailsList>
      <QuoteContainer>
        <Quote color={text}>
          &quot;Marcus has a range of skills in both design and development
          which give him the distinct ability to take an initial concept and
          turn it into a finished product.&quot;
        </Quote>
        <Spacer size="s" />
        <QuotedByContainer>
          <QuotedBy
            target="_blank"
            rel="noopener noreferrer"
            href="https://uk.linkedin.com/in/apamphilon"
          >
            - Alex Pamphilon, Front End Team Lead
          </QuotedBy>
          <ExternalLinkIcon src={externalLinkIcon} alt="external link" />
        </QuotedByContainer>
      </QuoteContainer>
    </StyledDetails>
  );
};

export default Details;
