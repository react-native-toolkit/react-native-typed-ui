import { useState, Dispatch, SetStateAction } from 'react';
import { createRexStore } from 'rex-state';
import type themeType from './theme';

export type themeModeTypes = 'dark' | 'light';

function createThemeProvider<T extends themeType>(
  lightTheme: T,
  darkTheme?: T
) {
  const useThemeHook = (
    defaultMode: themeModeTypes = 'light'
  ): [
    T,
    () => void,
    Dispatch<SetStateAction<T>>,
    Dispatch<SetStateAction<T | undefined>>
  ] => {
    const [mode, setMode] = useState<themeModeTypes>(defaultMode);

    const [lightThemeState, setLightThemeState] = useState(lightTheme);
    const [darkThemeState, setDarkThemeState] = useState(darkTheme);

    const toggleTheme = () => setMode(mode === 'dark' ? 'light' : 'dark');

    return [
      !darkThemeState
        ? lightThemeState
        : mode === 'light'
        ? lightThemeState
        : darkThemeState,
      toggleTheme,
      setLightThemeState,
      setDarkThemeState,
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

  const useChangeLightTheme = () => {
    return useThemeStore()[2];
  };

  const useChangeDarkTheme = () => {
    return useThemeStore()[3];
  };

  return {
    useTheme,
    useThemeToggle,
    ThemeProvider,
    useChangeLightTheme,
    useChangeDarkTheme,
  };
}

export default createThemeProvider;
