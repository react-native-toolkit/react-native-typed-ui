import createThemeComponents from 'react-native-typed-ui';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';

export const {
  ThemeProvider,
  useTheme,
  useThemeToggle,
  Box,
  Row,
  Column,
  TextBlock,
  InputText,
  Touchable,
} = createThemeComponents(lightTheme, darkTheme);
