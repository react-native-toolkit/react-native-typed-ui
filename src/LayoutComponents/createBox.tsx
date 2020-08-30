import React from 'react';
import { View } from 'react-native';
import type { BoxProps } from 'src/theme/themeTypes';
import type themeType from '../theme/theme';
import createViewStyle from 'src/themeUtils/createViewStyle';

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
