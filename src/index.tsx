import type themeType from './theme/theme';
import createViewStyle from './themeUtils/createViewStyle';
import createThemeProvider from './theme/createThemeProvider';
import createBox from './LayoutComponents/createBox';
import createRow from './LayoutComponents/createRow';
import createColumn from './LayoutComponents/createColumn';
import createTextBlock from './Components/createTextBlock';
import createInputText from './Components/createInputText';
import createTouchable from './Components/createTouchable';

export default function createThemeComponents<T extends themeType>(
  lightTheme: T,
  darkTheme?: T
) {
  const { useTheme, useThemeToggle, ThemeProvider } = createThemeProvider(
    lightTheme,
    darkTheme
  );

  const Box = createBox(useTheme);
  const Row = createRow(useTheme);
  const Column = createColumn(useTheme);

  const TextBlock = createTextBlock(useTheme);
  const InputText = createInputText(useTheme);
  const Touchable = createTouchable(useTheme);

  return {
    useTheme,
    useThemeToggle,
    ThemeProvider,
    createViewStyle,
    Box,
    Row,
    Column,
    TextBlock,
    InputText,
    Touchable,
  };
}
