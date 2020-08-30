import { useState } from 'react';
import { createRexStore } from 'rex-state';
import type themeType from './theme';

function createThemeProvider<T extends themeType>(
  lightTheme: T,
  darkTheme?: T
) {
  const useThemeHook = (): [T, () => void] => {
    const [mode, setMode] = useState<'dark' | 'light'>('light');

    const toggleTheme = () => setMode(mode === 'dark' ? 'light' : 'dark');

    return [
      !darkTheme ? lightTheme : mode === 'light' ? lightTheme : darkTheme,
      toggleTheme,
    ];
  };

  const {
    useStore: useThemeStore,
    RexProvider: ThemeProvider,
  } = createRexStore(useThemeHook);

  const useTheme = () => {
    return useThemeStore()[0];
  };

  const useThemeToggle = () => {
    return useThemeStore()[1];
  };

  return {
    useTheme,
    useThemeToggle,
    ThemeProvider,
  };
}

export default createThemeProvider;
