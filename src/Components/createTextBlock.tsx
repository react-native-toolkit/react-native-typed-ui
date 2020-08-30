import React from 'react';
import { Text } from 'react-native';
import type { TextBlockProps } from 'src/theme/themeTypes';
import createTextStyle from 'src/themeUtils/createTextStyle';
import type themeType from '../theme/theme';

function createTextBlock<T extends themeType>(useTheme: () => T) {
  const TextBlock = ({
    text = {},
    children,
    ...otherProps
  }: TextBlockProps<T>) => {
    const theme = useTheme();

    return (
      <Text {...text} style={createTextStyle(otherProps, theme)}>
        {children}
      </Text>
    );
  };

  return TextBlock;
}

export default createTextBlock;
