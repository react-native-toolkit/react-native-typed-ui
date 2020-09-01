import createThemeComponents, {
  defaultDarkTheme,
  defaultTheme,
} from 'react-native-typed-ui';

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
} = createThemeComponents(defaultTheme, defaultDarkTheme);
