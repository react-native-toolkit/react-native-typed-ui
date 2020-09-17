import React from 'react';
import type { TextInputProps } from 'react-native';
import {
  LoginBox,
  LoginInputText,
  LoginTextBlock,
  LoginTouchable,
} from '../loginDesign';

export interface InputBoxProps extends TextInputProps {
  actionText?: string;
  onClickAction?: () => unknown;
}

const pressedStyle = { opacity: 0.8 };

// TODO: Add Forward Ref
const InputField = ({
  actionText = '',
  onClickAction = () => null,
  ...otherProps
}: InputBoxProps) => {
  return (
    <LoginBox
      padding="normal"
      borderWidth={1}
      borderColor="placeholder"
      backgroundColor="placeholderBackground"
      borderRadius="inputField"
      flexDirection="row"
    >
      <LoginBox flex={1}>
        <LoginInputText
          fontFamily="primary"
          placeholderTextColor="placeholder"
          color="text"
          textInput={{ ...otherProps }}
        />
      </LoginBox>
      {actionText ? (
        <LoginTouchable
          pressedStyle={pressedStyle}
          press={{ onPress: onClickAction }}
        >
          <LoginTextBlock
            fontFamily="primary"
            color="brand"
            fontSize="normalText"
          >
            {actionText}
          </LoginTextBlock>
        </LoginTouchable>
      ) : null}
    </LoginBox>
  );
};

export default InputField;
