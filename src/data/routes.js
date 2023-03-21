import MyStory from '../pages/MyStory';
import Skills from '../pages/Skills';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import AboutMe from '../pages/AboutMe';

export default [
  { path: '/my-story', Component: MyStory },
  { path: '/about-me', Component: AboutMe },
  { path: '/skills', Component: Skills },
  { path: '/experience', Component: Experience },
  { path: '/projects', Component: Projects },
  { path: '/contact', Component: Contact },
];
