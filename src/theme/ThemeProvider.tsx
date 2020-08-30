import { createRexStore } from 'rex-state';
import defaultTheme from './defaultTheme';

const useTheme = () => {
  return defaultTheme;
};

export const {
  useStore: useThemeStore,
  RexProvider: ThemeProvider,
} = createRexStore(useTheme);
