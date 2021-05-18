import {
  blue,
  darkBlue,
  greyLight,
  greyMedium,
  midnightBlue,
  midnightBlueDark,
  midnightBlueLight,
} from '../styles/colors';
import useThemeSelect from './useThemeSelect';

const useDynamicColors = (light, dark) =>
  useThemeSelect(
    {
      text: midnightBlue,
      page: '#FFFFFF',
      border: greyMedium,
      card: blue,
      inputBorder: blue,
      toast: greyLight,
      header: blue,
      ...light,
    },
    {
      text: '#FFFFFF',
      page: midnightBlue,
      border: midnightBlueDark,
      card: midnightBlueLight,
      inputBorder: '#FFFFFF',
      toast: darkBlue,
      header: darkBlue,
      ...dark,
    }
  );

export default useDynamicColors;
