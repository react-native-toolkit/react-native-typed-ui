import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import type {
  CommonThemableTypes,
  nonThemableViewStyles,
} from '../theme/themeTypes';
import type themeType from '../theme/theme';
import createViewStyle from '../themeUtils/createViewStyle';

export interface ThemableViewStyle<T extends themeType>
  extends nonThemableViewStyles<T>,
    CommonThemableTypes<T> {
  children?: ReactNode;
}

export interface BoxProps<T extends themeType> extends ThemableViewStyle<T> {
  nativeProps?: ViewProps;
  /**
   * @deprecated Use nativeProps instead
   */
  view?: ViewProps;
}

// Warn Users about deprecating view prop
let IS_VIEW_ALERTED = false;

function createBox<T extends themeType>(useTheme: () => T) {
  const Box = ({
    children,
    nativeProps = {},
    view,
    ...otherProps
  }: BoxProps<T>) => {
    const theme = useTheme();

    if (view && __DEV__ && !IS_VIEW_ALERTED) {
      console.warn(
        '`textInput` prop is deprecated in favour of `nativeProps` please refactor your components!'
      );
      IS_VIEW_ALERTED = true;
    }

    if (view) {
      nativeProps = { ...(view || {}), ...(nativeProps || {}) };
    }

    return (
      <View {...nativeProps} style={createViewStyle(otherProps, theme)}>
        {children}
      </View>
    );
  };
  return Box;
}

export default createBox;
