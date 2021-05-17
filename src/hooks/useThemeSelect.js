import { useTheme } from '../context/theme';

const useThemeSelect = (light, dark) => {
  const { theme } = useTheme();

  return theme === 'dark' ? dark : light;
};

export default useThemeSelect;
