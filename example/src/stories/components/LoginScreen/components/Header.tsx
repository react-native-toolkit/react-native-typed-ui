import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  LoginRow,
  LoginTextBlock,
  LoginTouchable,
  useLoginTheme,
} from '../loginDesign';

const pressedStyle = { opacity: 0.8 };

const Header = () => {
  const theme = useLoginTheme();

  return (
    <LoginRow
      paddingTop="normal"
      alignItems="center"
      justifyContent="space-between"
    >
      <LoginTouchable
        pressedStyle={pressedStyle}
        press={{ onPress: () => null }}
        width={48}
        alignItems="flex-start"
      >
        <AntDesign
          name="close"
          size={theme.iconSizes.normal}
          color={theme.colors.placeholder}
        />
      </LoginTouchable>
      <LoginTextBlock fontFamily="primary" fontSize="titleText" color="title">
        {'Sign Up'}
      </LoginTextBlock>
      <LoginTouchable
        pressedStyle={pressedStyle}
        press={{ onPress: () => null }}
        width={48}
        alignItems="flex-end"
      >
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

export default Header;
