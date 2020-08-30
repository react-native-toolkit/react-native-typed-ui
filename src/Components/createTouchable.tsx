import React from 'react';
import { Pressable } from 'react-native';
import type themeType from '../theme/theme';
import type { TouchableProps } from '../theme/themeTypes';
import createViewStyle from '../themeUtils/createViewStyle';

function createTouchable<T extends themeType>(useTheme: () => T) {
  const Touchable = ({
    children,
    pressedChildren,
    inactiveChildren,
    pressedStyle = {},
    inactiveStyle = {},
    press = {},
    ...otherProps
  }: TouchableProps<T>) => {
    const theme = useTheme();
    return (
      <Pressable
        {...press}
        style={({ pressed }) => [
          createViewStyle(otherProps, theme),
          pressed
            ? createViewStyle(pressedStyle, theme)
            : createViewStyle(inactiveStyle, theme),
        ]}
      >
        {({ pressed }) => {
          return (
            <>
              {children}
              {pressed ? pressedChildren : inactiveChildren}
            </>
          );
        }}
      </Pressable>
    );
  };
  return Touchable;
}

export default createTouchable;
