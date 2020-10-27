import createThemeComponents from 'react-native-typed-ui';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

export const {
  Box,
  Column,
  Row,
  InputText,
  TextBlock,
  Touchable,
  ThemeProvider,
  useTheme,
  useThemeToggle,
  useChangeDarkTheme,
  useChangeLightTheme,
} = createThemeComponents(lightTheme, darkTheme);

export type themeType = ReturnType<typeof useTheme>;
