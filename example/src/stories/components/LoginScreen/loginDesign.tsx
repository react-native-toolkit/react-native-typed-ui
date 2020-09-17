import React, { ReactNode } from 'react';
import createThemeComponents, { themeModeTypes } from 'react-native-typed-ui';
import { loginThemeOne } from './loginThemes';
import { useFonts } from 'expo-font';

export const {
  Box: LoginBox,
  Column: LoginColumn,
  Row: LoginRow,
  InputText: LoginInputText,
  TextBlock: LoginTextBlock,
  Touchable: LoginTouchable,
  ThemeProvider,
  useTheme: useLoginTheme,
  useThemeToggle: useLoginThemeToggle,
  useChangeDarkTheme: useLoginChangeDarkTheme,
  useChangeLightTheme: useLoginChangeLightTheme,
} = createThemeComponents(loginThemeOne);

export const LoginThemeProvider = ({
  children,
  mode,
}: {
  children: ReactNode;
  mode?: themeModeTypes;
}) => {
  const [loaded] = useFonts({
    roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
    grandStander: require('../../assets/fonts/Grandstander-VariableFont_wght.ttf'),
    kufam: require('../../assets/fonts/Kufam-VariableFont_wght.ttf'),
  });

  if (!loaded) return null;

  return <ThemeProvider value={mode}>{children}</ThemeProvider>;
};
