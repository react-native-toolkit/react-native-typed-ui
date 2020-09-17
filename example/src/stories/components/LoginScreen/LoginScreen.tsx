import React, { useState } from 'react';
import Header from './components/Header';
import InputField from './components/InputField';
import {
  LoginBox,
  LoginColumn,
  LoginRow,
  LoginTextBlock,
  LoginTouchable,
  useLoginTheme,
} from './loginDesign';
import { Switch } from 'react-native';

const pressedStyle = { opacity: 0.8 };

const LoginScreen = () => {
  const theme = useLoginTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const togglePasswordVisibility = () => setIsPasswordVisible((val) => !val);

  return (
    <LoginColumn padding="normal" flex={1} backgroundColor="background">
      <Header />
      <LoginColumn flex={1} paddingTop="large" spacing="normal">
        <InputField placeholder="Name" textContentType="name" />
        <InputField
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
        />
        <InputField
          secureTextEntry={!isPasswordVisible}
          textContentType="password"
          placeholder="Password"
          actionText={isPasswordVisible ? 'HIDE' : 'SHOW'}
          onClickAction={togglePasswordVisibility}
        />
      </LoginColumn>
      <LoginColumn paddingBottom="large" spacing="normal">
        <LoginRow spacing="normal" alignItems="center" justifyContent="center">
          <Switch
            trackColor={{
              false: theme.colors.placeholder,
              true: theme.colors.brand,
            }}
            thumbColor={
              isEnabled ? theme.colors.brand : theme.colors.background
            }
            ios_backgroundColor={theme.colors.placeholder}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <LoginTextBlock
            fontFamily="primary"
            fontSize="infoText"
            color="placeholder"
          >
            {'I would like to receive your newsletter'}
          </LoginTextBlock>
        </LoginRow>
        <LoginTouchable
          pressedStyle={pressedStyle}
          press={{ onPress: () => null }}
        >
          <LoginBox
            backgroundColor="brand"
            alignItems="center"
            justifyContent="center"
            borderRadius="button"
            padding="normal"
          >
            <LoginTextBlock
              fontFamily="primary"
              fontSize="normalText"
              color="background"
            >
              Sign Up
            </LoginTextBlock>
          </LoginBox>
        </LoginTouchable>
      </LoginColumn>
    </LoginColumn>
  );
};

export default LoginScreen;
