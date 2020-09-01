import type { StyleProp, TextStyle } from 'react-native';
import type themeType from '../theme/theme';
import type { ThemableTextStyle } from '../theme/themeTypes';
import createViewStyle from './createViewStyle';

const createTextStyle = <T extends themeType>(
  {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    ...otherProps
  }: ThemableTextStyle<T>,
  themeObject: T
): StyleProp<TextStyle> => {
  const viewStyles = createViewStyle(otherProps, themeObject);

  return [
    viewStyles,
    {
      fontFamily:
        fontFamily && themeObject.fonts[(fontFamily as unknown) as string],
      fontSize:
        fontSize && themeObject.fontSizes[(fontSize as unknown) as string],
      lineHeight:
        fontSize &&
        lineHeight &&
        themeObject.lineHeights[(lineHeight as unknown) as string] &&
        themeObject.fontSizes[(fontSize as unknown) as string]
          ? (themeObject.fontSizes[(fontSize as unknown) as string] as number) *
            (themeObject.lineHeights[
              (lineHeight as unknown) as string
            ] as number)
          : undefined,
      letterSpacing:
        letterSpacing &&
        themeObject.letterSpacings[(letterSpacing as unknown) as string],
    },
    fontWeight
      ? {
          fontWeight: themeObject.fontWeights[
            (fontWeight as unknown) as string
          ] as TextStyle['fontWeight'],
        }
      : null,
  ];
};

export default createTextStyle;
