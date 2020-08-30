import React from 'react';
import { TextInput } from 'react-native';
import type { InputProps } from 'src/theme/themeTypes';
import createTextStyle from 'src/themeUtils/createTextStyle';
import type themeType from '../theme/theme';

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
