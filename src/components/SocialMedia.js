import React from 'react';
import styled from 'styled-components/macro';
import {
  emailIcon,
  phoneIcon,
  githubIcon,
  linkedInIcon,
} from '../assets/images';
import { small } from '../styles/breakpoints';

const StyledSocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SocialMediaItem = styled.img`
  width: 100%;
  height: 100%;
`;

const Link = styled.a`
  margin: 0 1.5rem 1.5rem 0;
  width: 4rem;
  height: 4rem;
  transition: all 0.2s ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: ${small}) {
    width: 4.5rem;
    height: 4.5rem;
    margin: 0 2rem 2rem 0;
  }
`;

const socialMediaItems = [
  { url: 'mailto:m.burnett8@outlook.com', icon: emailIcon },
  { url: 'tel: +447393862452', icon: phoneIcon },
  { url: 'https://www.linkedin.com/in/marcus-burnett/', icon: linkedInIcon },
  { url: 'https://www.github.com/marcusburnett', icon: githubIcon },
];

const SocialMedia = () => (
  <StyledSocialMedia>
    {socialMediaItems.map((social) => (
      <Link
        key={social.url}
        target="_blank"
        rel="noopener noreferrer"
        href={social.url}
      >
        <SocialMediaItem src={social.icon} />
      </Link>
    ))}
  </StyledSocialMedia>
);

export default SocialMedia;
