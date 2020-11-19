import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import type { colorType, ThemableTextStyle } from '../theme/themeTypes';
import type themeType from '../theme/theme';
import createTextStyle from '../themeUtils/createTextStyle';

export type ThemedInputProps = Omit<
  TextInputProps,
  'placeholderTextColor' | 'underlineColorAndroid'
>;

export interface ThemeableTextInputStyle<T extends themeType>
  extends ThemableTextStyle<T> {
  placeholderTextColor?: colorType<T>;
}

export interface InputProps<T extends themeType>
  extends ThemeableTextInputStyle<T> {
  nativeProps?: ThemedInputProps;
  /**
   * @deprecated Use nativeProps instead
   */
  textInput?: ThemedInputProps;
  underlineColorAndroid?: colorType<T>;
}

// Warn Users about deprecating press prop
let IS_TEXTINPUT_ALERTED = false;

function createInputText<T extends themeType>(useTheme: () => T) {
  const InputText = ({
    nativeProps = {},
    textInput,
    underlineColorAndroid,
    placeholderTextColor,
    ...otherProps
  }: InputProps<T>) => {
    const theme = useTheme();

    if (textInput && __DEV__ && !IS_TEXTINPUT_ALERTED) {
      console.warn(
        '`textInput` prop is deprecated in favour of `nativeProps` please refactor your components!'
      );
      IS_TEXTINPUT_ALERTED = true;
    }

    if (textInput) {
      nativeProps = { ...(textInput || {}), ...(nativeProps || {}) };
    }

    return (
      <TextInput
        {...nativeProps}
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
