import { createRexStore } from 'rex-state';
import theme from './theme';

const useTheme = () => {
  return theme;
};

export const {
  useStore: useThemeStore,
  RexProvider: ThemeProvider,
} = createRexStore(useTheme);
