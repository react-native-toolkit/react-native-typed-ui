import React, { Children } from 'react';
import { View } from 'react-native';
import type themeType from '../theme/theme';
import type { RowProps } from '../theme/themeTypes';
import createViewStyle from '../themeUtils/createViewStyle';

function createRow<T extends themeType>(useTheme: () => T) {
  const Row = ({
    children,
    spacing,
    view = {},
    ...otherProps
  }: RowProps<T>) => {
    const theme = useTheme();

    const { flexDirection = 'row' } = otherProps;

    let childElements = Children.map(children, (child) => child);

    if (spacing) {
      childElements = childElements?.map((each, eachIndex) => {
        const isLastElement = eachIndex === (childElements?.length ?? 0) - 1;
        return (
          <View
            key={eachIndex}
            style={
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
        style={[createViewStyle(otherProps, theme), { flexDirection }]}
      >
        {childElements}
      </View>
    );
  };
  return Row;
}

export default createRow;
