import React from 'react';
import { Text, TextProps } from 'react-native';
import type { ThemableTextStyle } from '../theme/themeTypes';
import type themeType from '../theme/theme';
import createTextStyle from '../themeUtils/createTextStyle';

export interface TextBlockProps<T extends themeType>
  extends ThemableTextStyle<T> {
  /**
   * @deprecated Use nativeProps instead
   */
  text?: TextProps;
  nativeProps?: TextProps;
}

// Warn Users about deprecating text prop
let IS_TEXT_ALERTED = false;

function createTextBlock<T extends themeType>(useTheme: () => T) {
  const TextBlock = ({
    text,
    children,
    nativeProps = {},
    ...otherProps
  }: TextBlockProps<T>) => {
    const theme = useTheme();

    if (text && __DEV__ && !IS_TEXT_ALERTED) {
      console.warn(
        '`press` prop is deprecated in favour of `nativeProps` please refactor your components!'
      );
      IS_TEXT_ALERTED = true;
    }

    if (text) {
      nativeProps = { ...(text || {}), ...(nativeProps || {}) };
    }

    return (
      <Text {...nativeProps} style={createTextStyle(otherProps, theme)}>
        {children}
      </Text>
    );
  };

  return TextBlock;
}

export default createTextBlock;
