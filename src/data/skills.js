import {
  reactBackground,
  reactIcon,
  sketchIcon,
  reactNativeIcon,
  firebaseIcon,
  reduxIcon,
  sentryIcon,
  gitIcon,
  adobeXdIcon,
  overflowIcon,
  invisionIcon,
  reactNativeIconDark,
  reactIconDark,
} from '../assets/images';
import projects from './projects';
import tools from './tools';

export const developmentSkills = [
  {
    title: 'React',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) =>
      [
        'React Router',
        'Styled Components',
        'React Testing Library',
        'Formik',
        'Axios',
        'ESLint',
      ].includes(tool.title)
    ),
    projects: projects.filter((project) => project.skills?.includes('React')),
    image: reactBackground,
    logos: { light: reactIconDark, dark: reactIcon },
    path: '/skills/react',
    category: 'dev',
  },
  {
    title: 'React Native',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) =>
      [
        'React Navigation',
        'React Native Firebase',
        'React Native Testing Library',
        'Formik',
        'Axios',
      ].includes(tool.title)
    ),
    projects: projects.filter((project) =>
      project.skills?.includes('React Native')
    ),
    image: reactBackground,
    logos: { light: reactNativeIconDark, dark: reactNativeIcon },
    path: '/skills/react-native',
    category: 'dev',
  },
  {
    title: 'Redux',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) =>
      ['React Redux', 'Redux Ducks', 'Redux Thunk'].includes(tool.title)
    ),
    projects: projects.filter((project) => project.skills?.includes('Redux')),
    image: reactBackground,
    logos: { light: reduxIcon, dark: reduxIcon },
    path: '/skills/redux',
    category: 'dev',
  },
  {
    title: 'Firebase',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) =>
      [
        'Authentication',
        'Firestore',
        'Hosting',
        'Storage',
        'Cloud Functions',
        'App Distribution',
        'Cloud Messaging',
      ].includes(tool.title)
    ),
    projects: projects.filter((project) =>
      project.skills?.includes('Firebase')
    ),
    image: reactBackground,
    logos: { light: firebaseIcon, dark: firebaseIcon },
    path: '/skills/firebase',
    category: 'dev',
  },
  {
    title: 'Sentry',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) =>
      ['React Redux', 'Redux Ducks', 'Redux Thunk'].includes(tool.title)
    ),
    projects: projects.filter((project) => project.skills?.includes('Sentry')),
    image: reactBackground,
    logos: { light: sentryIcon, dark: sentryIcon },
    path: '/skills/sentry',
    category: 'dev',
  },
  {
    title: 'Git',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) =>
      [
        'Authentication',
        'Firestore',
        'Hosting',
        'Storage',
        'Cloud Functions',
        'App Distribution',
        'Cloud Messaging',
      ].includes(tool.title)
    ),
    projects: projects.filter((project) => project.skills?.includes('Git')),
    image: reactBackground,
    logos: { light: gitIcon, dark: gitIcon },
    path: '/skills/git',
    category: 'dev',
  },
];

export const designSkills = [
  {
    title: 'Sketch',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) =>
      ['Sketch Cloud', 'Craft'].includes(tool.title)
    ),
    projects: projects.filter((project) => project.skills?.includes('Sketch')),
    image: reactBackground,
    logos: { light: sketchIcon, dark: sketchIcon },
    path: '/skills/sketch',
    category: 'design',
  },
  {
    title: 'Adobe XD',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) => ['Angle'].includes(tool.title)),
    projects: projects.filter((project) =>
      project.skills?.includes('Adobe XD')
    ),
    image: reactBackground,
    logos: { light: adobeXdIcon, dark: adobeXdIcon },
    path: '/skills/adobe-xd',
    category: 'design',
  },
  {
    title: 'InVision',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) => ['Sketch'].includes(tool.title)),
    projects: projects.filter((project) =>
      project.skills?.includes('Invision')
    ),
    image: reactBackground,
    logos: { light: invisionIcon, dark: invisionIcon },
    path: '/skills/invision',
    category: 'design',
  },
  {
    title: 'Overflow',
    experience:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.',
    used: tools.filter((tool) =>
      ['Angle', 'Sketch', 'Adobe XD'].includes(tool.title)
    ),
    projects: projects.filter((project) =>
      project.skills?.includes('Overflow')
    ),
    image: reactBackground,
    logos: { light: overflowIcon, dark: overflowIcon },
    path: '/skills/overflow',
    category: 'design',
  },
];

export default [...developmentSkills, ...designSkills];
