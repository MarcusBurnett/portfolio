import {
  axiosIcon,
  eslintIcon,
  formikIcon,
  reactRouterIcon,
  reactRouterIconBlack,
  reactTestingLibraryIcon,
  styledComponentsIcon,
  styledComponentsIconDark,
} from '../assets/images';

export default [
  {
    title: 'React Router',
    logos: { dark: reactRouterIcon, light: reactRouterIconBlack },
  },
  {
    title: 'Styled Components',
    logos: { dark: styledComponentsIcon, light: styledComponentsIconDark },
  },
  {
    title: 'React Testing Library',
    logos: { dark: reactTestingLibraryIcon, light: reactTestingLibraryIcon },
  },
  {
    title: 'Formik',
    logos: { dark: formikIcon, light: formikIcon },
  },
  {
    title: 'ESLint',
    logos: { dark: eslintIcon, light: eslintIcon },
  },
  {
    title: 'Axios',
    logos: { dark: axiosIcon, light: axiosIcon },
  },
];
