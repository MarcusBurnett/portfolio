import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { appStoreIcon, googlePlayIcon } from '../assets/images';
import projects from '../data/projects';
import skills from '../data/skills';
import { fadeInAndSlideLeft, fadeInAndSlideUp } from '../keyframes';
import Spacer from './Spacer';
import { medium } from '../styles/fonts';
import CardList from './CardList';
import { large, xsmall, small } from '../styles/breakpoints';
import { red } from '../styles/colors';

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-left: -60px;
  padding-left: 110px;
  transition: background-color 0.3s ease;
  overflow: hidden;

  @media screen and (max-width: ${small}) {
    padding-bottom: 50px;
  }

  @media screen and (max-width: ${xsmall}) {
    width: 100vw;
    margin-left: 0;
    padding-left: 0;
    margin-top: -90px;
  }
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  max-height: 60%;
  overflow: hidden;
  opacity: 0;
  animation: 1s ${fadeInAndSlideLeft} ease 0.5s forwards;
`;

const BackgroundImage = styled.img`
  max-height: 120%;
  max-width: 100%;
`;

const ImageFade = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
`;

const HorizontalImageFade = styled(ImageFade)`
  background: ${({ side, rgb }) => `linear-gradient(
    90deg,
    rgba(${rgb?.r || 0}, ${rgb?.g || 0}, ${rgb?.b || 0}, ${
    side === 'right' ? 0.3 : 1
  }) 0%,
    rgba(${rgb?.r || 0}, ${rgb?.g || 0}, ${rgb?.b || 0}, ${
    side === 'right' ? 1 : 0.3
  }) 100%
  )`};
`;

const VerticalImageFade = styled(ImageFade)`
  background: ${({ side, rgb }) => `linear-gradient(
    0deg,
    rgba(${rgb?.r || 0}, ${rgb?.g || 0}, ${rgb?.b || 0}, ${
    side === 'right' ? 0.3 : 1
  }) 0%,
    rgba(${rgb?.r || 0}, ${rgb?.g || 0}, ${rgb?.b || 0}, ${
    side === 'right' ? 1 : 0.3
  }) 100%
  )`};
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} ease 0.7s forwards;
`;

const ContentContainer = styled.div`
  position: relative;
  padding: 5vh 3vw 5vh 1rem;
  display: flex;

  @media screen and (max-width: ${large}) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Content = styled.div`
  width: 50%;
  margin-right: 10%;

  @media screen and (max-width: ${large}) {
    width: 100%;
    order: 2;
  }
`;

const Image = styled.img`
  max-width: 45%;
  align-self: flex-end;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} ease 0.8s forwards;

  @media screen and (max-width: ${large}) {
    max-width: 300px;
    order: 1;
    margin: 20px 0 -50px;
  }

  @media screen and (max-width: ${xsmall}) {
    max-width: 80%;
    margin: 190px 0 30px;
  }
`;

const DescriptionContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.7s forwards;
`;

const ToolsContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.8s forwards;
`;

const Logo = styled.img`
  max-width: 12rem;
  max-height: 12rem;
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.6s forwards;
`;

const LinksContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 1s forwards;

  @media screen and (max-width: ${xsmall}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const DownloadLinks = styled.div``;

const DownloadLink = styled.a`
  img {
    transform: scale(1);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const DownloadLinkImage = styled.img`
  max-height: 4rem;
  margin: 0 20px 20px 0;

  @media screen and (max-width: ${xsmall}) {
    max-height: 4.8rem;
    margin: 0 10px 10px 0;
  }
`;

const Website = styled.a`
  font-size: 2rem;
  font-weight: ${medium};
  text-decoration: none;

  &:hover {
    color: ${red};
  }

  @media screen and (max-width: ${xsmall}) {
    font-size: 2.4rem;
  }
`;

const StyledCardList = styled(CardList)`
  .styled-card {
    width: 5rem;
    height: 5rem;
    padding: 0;

    @media screen and (max-width: ${xsmall}) {
      width: 25vw;
      height: 25vw;
    }
  }

  .tooltip {
    top: 7rem;

    @media screen and (max-width: ${xsmall}) {
      top: 27vw;
    }
  }
`;

const Project = () => {
  const location = useLocation();
  const [project, setProject] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setProject(projects?.find((s) => s.path === location.pathname));
    }, 500);
  }, [location.pathname]);

  if (!project) return null;

  return (
    <Container backgroundColor={project.colors?.background}>
      <BackgroundImageContainer>
        <BackgroundImage src={project.backgroundImage} alt="background" />
        <VerticalImageFade rgb={project.colors?.rgb} />
        <HorizontalImageFade rgb={project.colors?.rgb} />
      </BackgroundImageContainer>
      <ContentContainer>
        <Content>
          <Logo src={project.logos?.default} />
          <Spacer size="xxxl" />
          <DescriptionContainer>
            <p>{project.description}</p>
          </DescriptionContainer>
          <Spacer size="xxxl" />
          <ToolsContainer>
            <ListContainer>
              <StyledCardList
                items={skills?.filter((item) =>
                  project.skills?.includes(item.title)
                )}
                backgroundColor={project.colors?.dark}
                borderColor={project.colors?.tint}
              />
            </ListContainer>
          </ToolsContainer>
          <Spacer size="xxxl" />
          <LinksContainer>
            {project.website && (
              <Website
                target="_blank"
                rel="noopener noreferrer"
                href={project.website}
              >
                {project.website}
              </Website>
            )}
            {project.website && project.downloadLinks.length > 0 && (
              <Spacer size="xxxl" />
            )}
            <DownloadLinks>
              {project.downloadLinks?.map((link) => (
                <DownloadLink
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.store}
                  href={link.url}
                >
                  <DownloadLinkImage
                    src={link.store === 'apple' ? appStoreIcon : googlePlayIcon}
                  />
                </DownloadLink>
              ))}
            </DownloadLinks>
          </LinksContainer>
        </Content>
        <Image src={project.image} alt={project.title} />
      </ContentContainer>
    </Container>
  );
};

export default Project;
