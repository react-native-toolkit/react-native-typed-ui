import type { StyleProp, ViewStyle } from 'react-native';
import type themeType from '../theme/theme';
import type {
  colorValueType,
  spacingType,
  ThemableViewStyle,
} from '../theme/themeTypes';
import createShadowStyle from './createShadow';

const getSpacing = <T extends themeType>(
  value: spacingType<T> | number | undefined,
  themeObject: T
): number | undefined => {
  return value
    ? typeof value === 'number'
      ? value
      : themeObject.spacing[(value as unknown) as string]
    : value;
};

const createViewStyle = <T extends themeType>(
  {
    borderRadius,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginStart,
    marginTop,
    marginVertical,
    padding,
    paddingBottom,
    paddingEnd,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
    paddingVertical,
    backgroundColor,
    shadow,
    color,
    borderColor,
    borderTopColor,
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    zIndex,
    ...otherProps
  }: ThemableViewStyle<T>,
  themeObject: T
): StyleProp<ViewStyle> => {
  const colors: {
    [k in keyof colorValueType<T>]?: string;
  } = {};

  if (backgroundColor) {
    colors.backgroundColor =
      themeObject.colors[(backgroundColor as unknown) as string];
  }

  if (color) {
    colors.color = themeObject.colors[(color as unknown) as string];
  }

  if (borderColor) {
    colors.borderColor = themeObject.colors[(borderColor as unknown) as string];
  }

  if (borderTopColor) {
    colors.borderTopColor =
      themeObject.colors[(borderTopColor as unknown) as string];
  }

  if (borderBottomColor) {
    colors.borderBottomColor =
      themeObject.colors[(borderBottomColor as unknown) as string];
  }

  if (borderLeftColor) {
    colors.borderLeftColor =
      themeObject.colors[(borderLeftColor as unknown) as string];
  }

  if (borderRightColor) {
    colors.borderRightColor =
      themeObject.colors[(borderRightColor as unknown) as string];
  }

  let shadowStyles: {
    shadowColor?: string;
    shadowOffset?: {
      width: number;
      height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;

    elevation?: number;
  } = {};

  if (shadow) {
    shadowStyles = createShadowStyle(
      themeObject.shadows[(shadow as unknown) as string]
    );
  }

  return [
    {
      borderRadius:
        borderRadius &&
        themeObject.borderRadius[(borderRadius as unknown) as string],
      borderBottomEndRadius:
        borderBottomEndRadius &&
        themeObject.borderRadius[(borderBottomEndRadius as unknown) as string],
      borderBottomLeftRadius:
        borderBottomLeftRadius &&
        themeObject.borderRadius[(borderBottomLeftRadius as unknown) as string],
      borderBottomRightRadius:
        borderBottomRightRadius &&
        themeObject.borderRadius[
          (borderBottomRightRadius as unknown) as string
        ],
      borderBottomStartRadius:
        borderBottomStartRadius &&
        themeObject.borderRadius[
          (borderBottomStartRadius as unknown) as string
        ],
      borderTopEndRadius:
        borderTopEndRadius &&
        themeObject.borderRadius[(borderTopEndRadius as unknown) as string],
      borderTopLeftRadius:
        borderTopLeftRadius &&
        themeObject.borderRadius[(borderTopLeftRadius as unknown) as string],
      borderTopRightRadius:
        borderTopRightRadius &&
        themeObject.borderRadius[(borderTopRightRadius as unknown) as string],
      borderTopStartRadius:
        borderTopStartRadius &&
        themeObject.borderRadius[(borderTopStartRadius as unknown) as string],
      zIndex: zIndex && themeObject.zIndices[(zIndex as unknown) as string],
      padding: getSpacing(padding, themeObject),
      paddingBottom: getSpacing(paddingBottom, themeObject),
      paddingEnd: getSpacing(paddingEnd, themeObject),
      paddingHorizontal: getSpacing(paddingHorizontal, themeObject),
      paddingLeft: getSpacing(paddingLeft, themeObject),
      paddingRight: getSpacing(paddingRight, themeObject),
      paddingStart: getSpacing(paddingStart, themeObject),
      paddingTop: getSpacing(paddingTop, themeObject),
      paddingVertical: getSpacing(paddingVertical, themeObject),
      margin: getSpacing(margin, themeObject),
      marginBottom: getSpacing(marginBottom, themeObject),
      marginEnd: getSpacing(marginEnd, themeObject),
      marginHorizontal: getSpacing(marginHorizontal, themeObject),
      marginLeft: getSpacing(marginLeft, themeObject),
      marginRight: getSpacing(marginRight, themeObject),
      marginStart: getSpacing(marginStart, themeObject),
      marginTop: getSpacing(marginTop, themeObject),
      marginVertical: getSpacing(marginVertical, themeObject),
      ...colors,
      ...shadowStyles,
    },
    otherProps,
  ];
};

export default createViewStyle;
