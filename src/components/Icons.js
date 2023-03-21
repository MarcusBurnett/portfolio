import React from 'react';
import styled from 'styled-components/macro';
import {
  emailIcon,
  phoneIcon,
  githubIcon,
  linkedInIcon,
} from '../assets/images';
import { small } from '../styles/breakpoints';

const StyledIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconsItem = styled.img`
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

const icons = [
  { url: 'mailto:m.burnett8@outlook.com', icon: emailIcon, name: 'email' },
  { url: 'tel: +31619714087', icon: phoneIcon, name: 'phone' },
  {
    url: 'https://www.linkedin.com/in/marcus-burnett/',
    icon: linkedInIcon,
    name: 'linkedIn',
  },
  {
    url: 'https://www.github.com/marcusburnett',
    icon: githubIcon,
    name: 'github',
  },
];

const Icons = () => (
  <StyledIcons>
    {icons.map((icon) => (
      <Link
        key={icon.url}
        target="_blank"
        rel="noopener noreferrer"
        href={icon.url}
        aria-label={`open link ${icon.url}`}
      >
        <IconsItem src={icon.icon} alt={icon.name} />
      </Link>
    ))}
  </StyledIcons>
);

export default Icons;
