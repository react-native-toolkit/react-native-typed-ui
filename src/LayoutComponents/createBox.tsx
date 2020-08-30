import React from 'react';
import { View } from 'react-native';
import type themeType from '../theme/theme';
import type { BoxProps } from '../theme/themeTypes';
import createViewStyle from '../themeUtils/createViewStyle';

function createBox<T extends themeType>(useTheme: () => T) {
  const Box = ({ children, view = {}, ...otherProps }: BoxProps<T>) => {
    const theme = useTheme();

    return (
      <View {...view} style={createViewStyle(otherProps, theme)}>
        {children}
      </View>
    );
  };
  return Box;
}

export default createBox;
