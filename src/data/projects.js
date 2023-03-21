import {
  airtimeRewards,
  airtimeRewardsBackground,
  airtimeRewardsLogo,
  myO2Background,
  o2Logo,
  o2LogoBlue,
  airtimeRewardsLogoDark,
  myO2,
  eeLogo,
  eeUpBackground,
  eeUp,
  sunCashbackLogo,
  sunCashback,
  sunCashbackBackground,
  tdsBackground,
  tds,
  tdsLogo,
  tdsLogoLight,
  eeLogoLight,
  shoppiliLogo,
  shoppili,
  shoppiliBackground,
  shoppiliLogoLight,
  mrbTravelLogo,
  mrbTravelLogoLight,
  mrbTravel,
  mrbTravelBackground,
} from '../assets/images';
import { greyMedium } from '../styles/colors';

export default [
  {
    title: 'Airtime Rewards',
    skills: ['React Native', 'Redux', 'Git', 'Sketch'],
    logos: {
      dark: airtimeRewardsLogo,
      light: airtimeRewardsLogoDark,
      default: airtimeRewardsLogo,
    },
    website: 'https://www.airtimerewards.co.uk',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/airtime-rewards-earn-rewards/id975840117',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.karrot',
      },
    ],
    image: airtimeRewards,
    path: '/projects/airtime-rewards',
    description:
      'The main focus of my time at Airtime Rewards was our React Native app. In 2020 we re-built the app from scratch, allowing us to work with the latest React Native features and packages. I have also been responsible for a lot of design work and created a number of Sketch component libraries to make our design process easier.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    backgroundImage: airtimeRewardsBackground,
  },
  {
    title: 'My O2',
    skills: [
      'React',
      'Redux',
      'Git',
      'Firebase',
      'Sketch',
      'inVision',
      'Overflow',
    ],
    logos: { dark: o2Logo, light: o2LogoBlue, default: o2Logo },
    website: 'https://myo2.airtimerewards.co.uk/',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/my-o2/id325533754',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=uk.co.o2.android.myo2',
      },
    ],
    image: myO2,
    path: '/projects/my-o2',
    description:
      'As a key partner of Airtime Rewards, we built the My O2 web app in React, giving O2 members easier access to the Airtime platform. In 2021, I re-designed the app using a new DSM and contributed to the development changes required to implement the new design. The app is built with React, and while it is accessible via desktop, it was primarily built to be view via a webview in the My O2 app.',
    colors: {
      background: '#000066',
      tint: '#0019A5',
      rgb: { r: 0, g: 0, b: 102 },
    },
    backgroundImage: myO2Background,
  },
  {
    title: 'EE Up',
    skills: ['React', 'Redux', 'Git', 'Sketch', 'Overflow'],
    logos: { dark: eeLogo, light: eeLogoLight, default: eeLogo },
    website: 'https://ee.co.uk/ee-and-me/my-ee-app',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/my-ee/id567457151',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=uk.co.ee.myee&hl=en_GB',
      },
    ],
    image: eeUp,
    path: '/projects/ee-up',
    description:
      'Similarly to the My O2 app, we created a web app specifically for EE members. I played a key role in both the design and development of the app which was the first time we as a team used Styled Components. This is a React app that is displayed to the user via a webview in the My EE app.',
    colors: {
      background: '#007B85',
      tint: '#33959D',
      rgb: { r: 0, g: 123, b: 133 },
    },
    backgroundImage: eeUpBackground,
  },
  {
    title: 'Sun Cashback',
    skills: ['React Native', 'Redux', 'Git', 'Sketch'],
    logos: {
      dark: sunCashbackLogo,
      light: sunCashbackLogo,
      default: sunCashbackLogo,
    },
    website: 'https://suncashback.co.uk/',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/sun-cashback/id1534593837',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.airtimerewards.suncashback.android',
      },
    ],
    image: sunCashback,
    path: '/projects/sun-cashback',
    description:
      "The Sun Cashback app is a re-skinned, limited version of the Airtime Rewards app. I was tasked with taking our app and re-designing it to use The Sun's branding, as well as source and implement a new icon library. Once the designs were signed off I also contributed to the development of the app, built with React Native.",
    colors: {
      background: '#63B9E9',
      tint: '#EBF5FF',
    },
    backgroundImage: sunCashbackBackground,
  },
  {
    title: 'Theatre Dance Studios',
    skills: ['React', 'Redux', 'Adobe XD'],
    logos: {
      dark: tdsLogo,
      light: tdsLogoLight,
      default: tdsLogo,
    },
    website: 'https://www.tdsbolton.co.uk',
    downloadLinks: [],
    image: tds,
    path: '/projects/tds',
    description:
      'One of my first projects was to build a new website for Theatre Dance Studios in Bolton. I designed the site in Adobe XD, built the front end in React and used Firebase for the back end, allowing dance school admins to update the data in each section of the app. Adding Firebase allowed the dance school to keep the site up-to-date without requiring frequent deployments.',
    colors: {
      background: '#54426A',
      tint: '#665579',
    },
    backgroundImage: tdsBackground,
  },
  {
    title: 'Shoppili',
    skills: ['React Native', 'Redux', 'Firebase', 'Adobe XD'],
    logos: {
      dark: shoppiliLogo,
      light: shoppiliLogoLight,
      default: shoppiliLogo,
    },
    contact: 'Request a demo',
    website: null,
    downloadLinks: [],
    image: shoppili,
    path: '/projects/shoppili',
    description:
      "I built Shoppili to make shopping easier for myself and my partner. I started with the branding, before designing the app with Adobe XD and then translating those designs into a React Native app that takes advantage of Firebase Firestore's real time updates. Though I haven't released this app to anyone else, we use it all the time. So if you wish to know more, just request a demo.",
    colors: {
      background: '#231E2E',
      tint: '#3C344E',
    },
    backgroundImage: shoppiliBackground,
  },
  {
    title: 'MRB Travel',
    skills: ['Javascript', 'Git', 'Adobe XD'],
    logos: {
      dark: mrbTravelLogoLight,
      light: mrbTravelLogo,
      default: mrbTravelLogo,
    },
    website: 'https://mrb-travel.herokuapp.com',
    downloadLinks: [],
    image: mrbTravel,
    path: '/projects/mrb-travel',
    description:
      'While initally learning web development, I built MRB Travel with HTML, CSS and Javascript for the front-end and for the back-end, it uses Node JS, Mongo DB and Express. Looking back, it is not built very well... There are issues e.g. with styles, optimisation and clean code. However, it does show where I started and how far I have come. I created the branding and design, then built the application, which was one of the first times I took an idea from concept to completion.',
    colors: {
      background: greyMedium,
      tint: '#E36F2D',
      rgb: { r: 202, g: 207, b: 230 },
    },
    backgroundImage: mrbTravelBackground,
    theme: 'light',
  },
];
