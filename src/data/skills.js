import {
  reactIcon,
  sketchIcon,
  reactNativeIcon,
  firebaseIcon,
  reduxIcon,
  javascript,
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
      'I use React for the majority of my web-based applications and am a big fan of the componentisation. While working at Airtime Rewards, I gained plenty of experience with this library, as well as a number of key packages, such as React Router, Styled Components and Testing Library/React.',
    used: tools.filter((tool) =>
      [
        'React Router',
        'Styled Components',
        'Testing Library/React',
        'Prop Types',
        'Formik',
        'Axios',
        'ESLint',
        'Sentry',
      ].includes(tool.title)
    ),
    projects: projects.filter((project) => project.skills?.includes('React')),
    logos: { light: reactIconDark, dark: reactIcon },
    path: '/skills/react',
    category: 'dev',
  },
  {
    title: 'React Native',
    experience:
      'For mobile applications, React Native is my library of choice. This maintains a level of consistency with web apps I work on, allowing me to transfer knowledge between web and mobile, and continue with componentisation.',
    used: tools.filter((tool) =>
      [
        'React Navigation',
        'React Native Firebase',
        'Testing Library/React Native',
        'Formik',
        'Axios',
        'Sentry',
      ].includes(tool.title)
    ),
    projects: projects.filter((project) =>
      project.skills?.includes('React Native')
    ),
    logos: { light: reactNativeIconDark, dark: reactNativeIcon },
    path: '/skills/react-native',
    category: 'dev',
  },
  {
    title: 'Redux',
    experience:
      'Though I also enjoy using React Context for state management, I have mostly used Redux on the majority of my projects at work. We initally preferred the use of separate folders for actions, types and reducers,  but recently moved over to ducks. Most of my experience involves hooks rather than the connect methods.',
    used: tools.filter((tool) =>
      ['React Redux', 'Redux Ducks', 'Redux Hooks', 'Redux Thunk'].includes(
        tool.title
      )
    ),
    projects: projects.filter((project) => project.skills?.includes('Redux')),
    logos: { light: reduxIcon, dark: reduxIcon },
    path: '/skills/redux',
    category: 'dev',
  },
  {
    title: 'Javascript',
    experience:
      'As a React-centric developer, Javascript is the language upon which it is all built. I have some experience building vanilla javascript projects, but prefer to use React where possible, provided it is also the best option. Have also recently started looking into Typescript.',
    used: tools.filter((tool) =>
      ['Lodash', 'Date FNS', 'Cloudinary'].includes(tool.title)
    ),
    projects: projects.filter((project) =>
      project.skills?.includes('Javascript')
    ),
    logos: { light: javascript, dark: javascript },
    path: '/skills/javascript',
    category: 'dev',
  },
  {
    title: 'Firebase',
    experience:
      'Firebase is a simple platform to get started with, which is what attracted me at first. I now use it in almost all personal projects to set up authentication, database and storage. I also have experience with Google Cloud Functions via Node.js, take advantage of app distribution for testing and cloud messaging for push notifications.',
    used: tools.filter((tool) =>
      [
        'React Native Firebase',
        'Firebase Authentication',
        'Firebase Firestore',
        'Firebase Hosting',
        'Firebase Storage',
        'Firebase Cloud Functions',
        'Firebase Cloud Messaging',
      ].includes(tool.title)
    ),
    projects: projects.filter((project) =>
      project.skills?.includes('Firebase')
    ),
    logos: { light: firebaseIcon, dark: firebaseIcon },
    path: '/skills/firebase',
    category: 'dev',
  },
  {
    title: 'Git',
    experience:
      'A required skill for any developer, git makes collaboration between devs much easier, and version history can be a life saver at times. I have experience with Github, Bitbucket and more recently, Gitlab.',
    used: tools.filter((tool) =>
      ['Github', 'Bitbucket', 'Gitlab'].includes(tool.title)
    ),
    projects: projects.filter((project) => project.skills?.includes('Git')),
    logos: { light: gitIcon, dark: gitIcon },
    path: '/skills/git',
    category: 'dev',
  },
];

export const designSkills = [
  {
    title: 'Sketch',
    experience:
      'Most of my design experience has come with Sketch. At Airtime, I was largely responsible for our design process. I helped move the company on to Sketch Cloud, built a variety of component libraries and implemented a new system based on git, with a master file that mirrored the live app and then each new feature had its own project, which would then be merged upon release.',
    used: tools.filter((tool) =>
      ['Sketch Cloud', 'Craft', 'Iconly', 'Angle'].includes(tool.title)
    ),
    projects: projects.filter((project) => project.skills?.includes('Sketch')),
    logos: { light: sketchIcon, dark: sketchIcon },
    path: '/skills/sketch',
    category: 'design',
  },
  {
    title: 'Adobe XD',
    experience:
      'My preferred design tool, Adobe XD is fast, fluid and easy to use, not only allowing a user to design screens, but also create realistic, animated prototypes. Though I do have more experience with Sketch thanks to my role at Airtime Rewards, I always prefer XD for personal projects.',
    used: tools.filter((tool) =>
      ['Angle', 'UI Faces', 'unDraw', 'Stark'].includes(tool.title)
    ),
    projects: projects.filter((project) =>
      project.skills?.includes('Adobe XD')
    ),
    logos: { light: adobeXdIcon, dark: adobeXdIcon },
    path: '/skills/adobe-xd',
    category: 'design',
  },
  {
    title: 'InVision',
    experience:
      "Adobe XD's prototyping and sharing has made inVision less relevant for me. However, I have plenty of experience with it as a prototyping tool. Most recently, inVision allowed me to access O2's DSM so that I could collaborate with them on the new My O2 app.",
    used: tools.filter((tool) =>
      ['Sketch', 'Craft', 'inVision DSM'].includes(tool.title)
    ),
    projects: projects.filter((project) =>
      project.skills?.includes('inVision')
    ),
    logos: { light: invisionIcon, dark: invisionIcon },
    path: '/skills/invision',
    category: 'design',
  },
  {
    title: 'Overflow',
    experience:
      'When UX becomes complicated, there is no better tool than Overflow for collaborating and ensuring you come up with the best user experience. This is particularly important when collaborating with external companies, as it allows them to get a good feel for the flow of the app.',
    used: tools.filter((tool) => ['Sketch', 'Adobe XD'].includes(tool.title)),
    projects: projects.filter((project) =>
      project.skills?.includes('Overflow')
    ),
    logos: { light: overflowIcon, dark: overflowIcon },
    path: '/skills/overflow',
    category: 'design',
  },
];

export default [...developmentSkills, ...designSkills];
