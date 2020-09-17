import React from 'react';
import {
  LoginColumn,
  LoginTextBlock,
  LoginTouchable,
  LoginRow,
  useLoginTheme,
} from './loginDesign';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
  const theme = useLoginTheme();

  return (
    <LoginRow
      paddingTop="normal"
      alignItems="center"
      justifyContent="space-between"
    >
      <LoginTouchable width={48} alignItems="flex-start">
        <AntDesign
          name="close"
          size={theme.iconSizes.normal}
          color={theme.colors.placeholder}
        />
      </LoginTouchable>
      <LoginTextBlock fontFamily="primary" fontSize="titleText" color="title">
        {'Sign Up'}
      </LoginTextBlock>
      <LoginTouchable width={48} alignItems="flex-end">
        <LoginTextBlock
          fontSize="normalText"
          fontFamily="primary"
          color="brand"
        >
          Login
        </LoginTextBlock>
      </LoginTouchable>
    </LoginRow>
  );
};

const LoginScreen = () => {
  return (
    <LoginColumn padding="normal" flex={1} backgroundColor="background">
      <Header />
    </LoginColumn>
  );
};

export default LoginScreen;
