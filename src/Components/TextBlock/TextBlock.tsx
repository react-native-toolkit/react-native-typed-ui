import React from 'react';
import { Text, TextProps } from 'react-native';
import type { ThemableTextStyle } from '../../theme/themeTypes';
import { useThemeStore } from '../../theme/ThemeProvider';
import createTextStyle from '../../themeUtils/createTextStyle';

export interface TextBlockProps extends ThemableTextStyle {
  text?: TextProps;
}

const TextBlock = ({ text = {}, children, ...otherProps }: TextBlockProps) => {
  const themeObject = useThemeStore();

  return (
    <Text {...text} style={createTextStyle(otherProps, themeObject)}>
      {children}
    </Text>
  );
};

export default TextBlock;
