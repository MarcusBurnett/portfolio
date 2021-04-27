import React from 'react';
import styled from 'styled-components/macro';
import { facebookIcon, linkedInIcon } from '../assets/images';

const StyledSocialMedia = styled.div`
  display: flex;
`;

const SocialMediaItem = styled.img`
  width: 4rem;
  height: 4rem;
`;

const Link = styled.a`
  margin: 0 1rem;
  width: 4rem;
  height: 4rem;
`;

const socialMediaItems = [
  { url: 'https://www.facebook.com', icon: facebookIcon },
  { url: 'https://www.linkedin.com', icon: linkedInIcon },
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
