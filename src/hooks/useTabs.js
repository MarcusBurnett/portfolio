import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  contactIcon,
  experienceIcon,
  profileIcon,
  projectsIcon,
  skillsIcon,
} from '../assets/images';

const useTabs = () => {
  const { pathname } = useLocation();
  const [selectedTab, setSelectedTab] = useState({});
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs([
      {
        title: 'My Story',
        icon: profileIcon,
        path: '/my-story',
        selected: pathname?.includes('my-story'),
      },
      {
        title: 'Skills',
        icon: skillsIcon,
        path: '/skills',
        selected: pathname?.includes('skills'),
      },
      {
        title: 'Experience',
        icon: experienceIcon,
        path: '/experience',
        selected: pathname?.includes('experience'),
      },
      {
        title: 'Projects',
        icon: projectsIcon,
        path: '/projects',
        selected: pathname?.includes('projects'),
      },
      {
        title: 'Contact',
        icon: contactIcon,
        path: '/contact',
        selected: pathname?.includes('contact'),
      },
    ]);
  }, [pathname]);

  useEffect(() => {
    setSelectedTab(tabs.find((tab) => tab.selected) ?? {});
  }, [tabs]);

  return { tabs, selectedTab };
};

export default useTabs;
