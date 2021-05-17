import {
  airtimeRewards,
  airtimeRewardsBackground,
  airtimeRewardsLogo,
  myO2Background,
  o2Logo,
  o2LogoBlue,
  airtimeRewardsLogoDark,
} from '../assets/images';

export default [
  {
    title: 'Airtime Rewards',
    skills: ['React Native', 'Redux', 'Sentry', 'Git', 'Sketch'],
    logos: {
      dark: airtimeRewardsLogo,
      light: airtimeRewardsLogoDark,
      default: airtimeRewardsLogo,
    },
    keyPoints: [],
    website: 'https://www.airtimerewards.co.uk',
    downloadLinks: [
      {
        store: 'apple',
        url:
          'https://apps.apple.com/gb/app/airtime-rewards-earn-rewards/id975840117',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.karrot',
      },
    ],
    image: airtimeRewards,
    path: '/projects/airtime-rewards',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Sed lectus vestibulum mattis ullamcorper velit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. ',
    colors: {
      background: '#0D2633',
      dark: '#1D2D36',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    backgroundImage: airtimeRewardsBackground,
  },
  {
    title: 'My O2',
    skills: ['React', 'Redux', 'Sentry', 'Git', 'Sketch', 'Overflow'],
    logos: { dark: o2Logo, light: o2LogoBlue, default: o2Logo },
    keyPoints: [],
    website: '',
    downloadLinks: [],
    image: airtimeRewards,
    path: '/projects/my-o2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Sed lectus vestibulum mattis ullamcorper velit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. ',
    colors: {
      background: '#000066',
      dark: '#09104D',
      tint: '#0019A5',
      rgb: { r: 0, g: 0, b: 102 },
    },
    backgroundImage: myO2Background,
  },
];
