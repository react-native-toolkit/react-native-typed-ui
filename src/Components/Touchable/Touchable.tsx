import React, { ReactNode } from 'react';
import { Pressable, PressableProps } from 'react-native';
import type { ThemableViewStyle } from '../../theme/themeTypes';
import { useThemeStore } from '../../theme/ThemeProvider';
import createViewStyle from '../../themeUtils/createViewStyle';

export type NonThemablePressableProps = Omit<
  PressableProps,
  'style' | 'children'
>;

export interface TouchableProps extends ThemableViewStyle {
  press?: NonThemablePressableProps;
  inactiveStyle?: ThemableViewStyle;
  pressedStyle?: ThemableViewStyle;
  pressedChildren?: ReactNode;
  inactiveChildren?: ReactNode;
}

const Touchable = ({
  children,
  pressedChildren,
  inactiveChildren,
  pressedStyle = {},
  inactiveStyle = {},
  press = {},
  ...otherProps
}: TouchableProps) => {
  const themeObject = useThemeStore();
  return (
    <Pressable
      {...press}
      style={({ pressed }) => [
        createViewStyle(otherProps, themeObject),
        pressed
          ? createViewStyle(pressedStyle, themeObject)
          : createViewStyle(inactiveStyle, themeObject),
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

export default Touchable;
