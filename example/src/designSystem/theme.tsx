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

export type ThemeType = ReturnType<typeof useTheme>;

export type ColorProp = keyof ThemeType['colors'];
