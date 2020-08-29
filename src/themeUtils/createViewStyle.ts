import type { useThemeStore } from '../theme/ThemeProvider';
import type {
  ThemableViewStyle,
  spacingType,
  colorValueType,
} from '../theme/themeTypes';
import type { StyleProp, ViewStyle } from 'react-native';
import createShadowStyle from './createShadow';

const getSpacing = <T extends ReturnType<typeof useThemeStore>>(
  value: spacingType | number | undefined,
  themeObject: T
): number | undefined => {
  return value
    ? typeof value === 'number'
      ? value
      : themeObject.spacing[value]
    : value;
};

const createViewStyle = <T extends ReturnType<typeof useThemeStore>>(
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
  }: ThemableViewStyle,
  themeObject: T
): StyleProp<ViewStyle> => {
  const colors: {
    [k in keyof colorValueType]?: string;
  } = {};

  if (backgroundColor) {
    colors.backgroundColor = themeObject.colors[backgroundColor];
  }

  if (color) {
    colors.color = themeObject.colors[color];
  }

  if (borderColor) {
    colors.borderColor = themeObject.colors[borderColor];
  }

  if (borderTopColor) {
    colors.borderTopColor = themeObject.colors[borderTopColor];
  }

  if (borderBottomColor) {
    colors.borderBottomColor = themeObject.colors[borderBottomColor];
  }

  if (borderLeftColor) {
    colors.borderLeftColor = themeObject.colors[borderLeftColor];
  }

  if (borderRightColor) {
    colors.borderRightColor = themeObject.colors[borderRightColor];
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
    shadowStyles = createShadowStyle(themeObject.shadows[shadow]);
  }

  return [
    {
      borderRadius: borderRadius && themeObject.borderRadius[borderRadius],
      borderBottomEndRadius:
        borderBottomEndRadius &&
        themeObject.borderRadius[borderBottomEndRadius],
      borderBottomLeftRadius:
        borderBottomLeftRadius &&
        themeObject.borderRadius[borderBottomLeftRadius],
      borderBottomRightRadius:
        borderBottomRightRadius &&
        themeObject.borderRadius[borderBottomRightRadius],
      borderBottomStartRadius:
        borderBottomStartRadius &&
        themeObject.borderRadius[borderBottomStartRadius],
      borderTopEndRadius:
        borderTopEndRadius && themeObject.borderRadius[borderTopEndRadius],
      borderTopLeftRadius:
        borderTopLeftRadius && themeObject.borderRadius[borderTopLeftRadius],
      borderTopRightRadius:
        borderTopRightRadius && themeObject.borderRadius[borderTopRightRadius],
      borderTopStartRadius:
        borderTopStartRadius && themeObject.borderRadius[borderTopStartRadius],
      zIndex: zIndex && themeObject.zIndices[zIndex],
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
