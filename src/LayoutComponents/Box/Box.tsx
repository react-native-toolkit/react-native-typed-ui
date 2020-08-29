import React from 'react';
import { View, ViewProps } from 'react-native';
import { useThemeStore } from '../../theme/ThemeProvider';
import type { ThemableViewStyle } from '../../theme/themeTypes';
import createViewStyle from '../../themeUtils/createViewStyle';

export interface BoxProps extends ThemableViewStyle {
  view?: ViewProps;
}

const Box = ({ children, view = {}, ...otherProps }: BoxProps) => {
  const themeObject = useThemeStore();

  return (
    <View {...view} style={createViewStyle(otherProps, themeObject)}>
      {children}
    </View>
  );
};

export default Box;
