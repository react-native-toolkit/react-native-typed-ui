import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import type {
  ThemeableTextInputStyle,
  colorType,
} from '../../theme/themeTypes';
import { useThemeStore } from '../../theme/ThemeProvider';
import createTextStyle from '../../themeUtils/createTextStyle';

export type ThemedInputProps = Omit<
  TextInputProps,
  'placeholderTextColor' | 'underlineColorAndroid'
>;

export interface InputProps extends ThemeableTextInputStyle {
  textInput?: ThemedInputProps;
  underlineColorAndroid?: colorType;
}

const InputText = ({
  textInput = {},
  underlineColorAndroid,
  placeholderTextColor,
  ...otherProps
}: InputProps) => {
  const themeObject = useThemeStore();

  return (
    <TextInput
      {...textInput}
      underlineColorAndroid={
        underlineColorAndroid
          ? themeObject.colors[underlineColorAndroid]
          : undefined
      }
      placeholderTextColor={
        placeholderTextColor
          ? themeObject.colors[placeholderTextColor]
          : undefined
      }
      style={createTextStyle(otherProps, themeObject)}
    />
  );
};

export default InputText;
