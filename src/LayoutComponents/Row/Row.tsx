import React, { Children } from 'react';
import { View, ViewProps } from 'react-native';
import { useThemeStore } from '../../theme/ThemeProvider';
import type { ThemableViewStyle, spacingType } from '../../theme/themeTypes';
import createViewStyle from '../../themeUtils/createViewStyle';

export interface RowProps extends ThemableViewStyle {
  spacing?: spacingType;
  view?: ViewProps;
}

const Row = ({
  children,
  spacing = 'none',
  view = {},
  ...otherProps
}: RowProps) => {
  const themeObject = useThemeStore();

  const { flexDirection = 'row' } = otherProps;

  let childElements = Children.map(children, (child) => child);

  if (spacing !== 'none') {
    childElements = childElements?.map((each, eachIndex) => {
      const isLastElement = eachIndex === (childElements?.length ?? 0) - 1;
      return (
        <View
          key={eachIndex}
          style={
            !isLastElement
              ? flexDirection === 'row' || flexDirection === 'row-reverse'
                ? { marginRight: themeObject.spacing[spacing] }
                : { marginBottom: themeObject.spacing[spacing] }
              : null
          }
        >
          {each}
        </View>
      );
    });
  }

  return (
    <View
      {...view}
      style={[createViewStyle(otherProps, themeObject), { flexDirection }]}
    >
      {childElements}
    </View>
  );
};

export default Row;
