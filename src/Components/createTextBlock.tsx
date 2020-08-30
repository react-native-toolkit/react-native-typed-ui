import React from 'react';
import { Text } from 'react-native';
import type themeType from '../theme/theme';
import type { TextBlockProps } from '../theme/themeTypes';
import createTextStyle from '../themeUtils/createTextStyle';

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
