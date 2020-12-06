import React, { Children, isValidElement } from 'react';
import { View, ViewProps } from 'react-native';
import type { spacingType } from '../theme/themeTypes';
import type themeType from '../theme/theme';
import createViewStyle from '../themeUtils/createViewStyle';
import type { ThemableViewStyle } from './createBox';

export interface RowProps<T extends themeType> extends ThemableViewStyle<T> {
  spacing?: spacingType<T> | number;
  nativeProps?: ViewProps;
  /**
   * @deprecated Use nativeProps instead
   */
  view?: ViewProps;
}

// Warn Users about deprecating view prop
let IS_VIEW_ALERTED = false;

function createRow<T extends themeType>(useTheme: () => T) {
  const Row = ({
    children,
    spacing,
    nativeProps = {},
    view,
    ...otherProps
  }: RowProps<T>) => {
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

    const { flexDirection = 'row' } = otherProps;

    let childElements = Children.map(children, (child) => child);

    if (spacing) {
      childElements = childElements?.map((each, eachIndex) => {
        const isLastElement = eachIndex === (childElements?.length ?? 0) - 1;

        const childProps = isValidElement(each) ? each.props : {};

        const {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          children: extractedChildren,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          nativeProps: extractedNativeProps,
          ...childStyleProps
        } = childProps;

        return (
          <View
            key={eachIndex}
            style={[
              !isLastElement
                ? flexDirection === 'row' || flexDirection === 'row-reverse'
                  ? {
                      marginRight:
                        typeof spacing === 'number'
                          ? spacing
                          : theme.spacing[(spacing as unknown) as string],
                    }
                  : {
                      marginBottom:
                        typeof spacing === 'number'
                          ? spacing
                          : theme.spacing[(spacing as unknown) as string],
                    }
                : null,
              childStyleProps,
            ]}
          >
            {each}
          </View>
        );
      });
    }

    return (
      <View
        {...nativeProps}
        style={[createViewStyle(otherProps, theme), { flexDirection }]}
      >
        {childElements}
      </View>
    );
  };
  return Row;
}

export default createRow;
