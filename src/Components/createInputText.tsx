import React from 'react';
import { TextInput } from 'react-native';
import type themeType from '../theme/theme';
import type { InputProps } from '../theme/themeTypes';
import createTextStyle from '../themeUtils/createTextStyle';

function createInputText<T extends themeType>(useTheme: () => T) {
  const InputText = ({
    textInput = {},
    underlineColorAndroid,
    placeholderTextColor,
    ...otherProps
  }: InputProps<T>) => {
    const theme = useTheme();

    return (
      <TextInput
        {...textInput}
        underlineColorAndroid={
          underlineColorAndroid
            ? theme.colors[(underlineColorAndroid as unknown) as string]
            : undefined
        }
        placeholderTextColor={
          placeholderTextColor
            ? theme.colors[(placeholderTextColor as unknown) as string]
            : undefined
        }
        style={createTextStyle(otherProps, theme)}
      />
    );
  };

  return InputText;
}

export default createInputText;
