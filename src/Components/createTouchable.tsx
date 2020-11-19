import React, { ReactNode } from 'react';
import { Pressable, PressableProps } from 'react-native';
import type { ThemableViewStyle } from 'src/LayoutComponents/createBox';
import type themeType from '../theme/theme';
import createViewStyle from '../themeUtils/createViewStyle';

export type NonThemablePressableProps = Omit<
  PressableProps,
  'style' | 'children'
>;

export interface TouchableProps<T extends themeType>
  extends ThemableViewStyle<T> {
  nativeProps?: NonThemablePressableProps;
  /**
   * @deprecated Use nativeProps instead
   */
  press?: NonThemablePressableProps;
  inactiveStyle?: ThemableViewStyle<T>;
  pressedStyle?: ThemableViewStyle<T>;
  pressedChildren?: ReactNode;
  inactiveChildren?: ReactNode;
}

// Warn Users about deprecating press prop
let IS_PRESS_ALERTED = false;

function createTouchable<T extends themeType>(useTheme: () => T) {
  const Touchable = ({
    children,
    pressedChildren,
    inactiveChildren,
    pressedStyle = {},
    inactiveStyle = {},
    press,
    nativeProps = {},
    ...otherProps
  }: TouchableProps<T>) => {
    const theme = useTheme();

    if (press && __DEV__ && !IS_PRESS_ALERTED) {
      console.warn(
        '`press` prop is deprecated in favour of `nativeProps` please refactor your components!'
      );
      IS_PRESS_ALERTED = true;
    }

    if (press) {
      nativeProps = { ...(press || {}), ...(nativeProps || {}) };
    }

    return (
      <Pressable
        {...nativeProps}
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
