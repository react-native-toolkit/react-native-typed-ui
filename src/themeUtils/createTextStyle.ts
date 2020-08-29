import type { useThemeStore } from '../theme/ThemeProvider';
import type { ThemableTextStyle } from '../theme/themeTypes';
import type { StyleProp, TextStyle } from 'react-native';
import createViewStyle from './createViewStyle';

const createTextStyle = <T extends ReturnType<typeof useThemeStore>>(
  {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    ...otherProps
  }: ThemableTextStyle,
  themeObject: T
): StyleProp<TextStyle> => {
  const viewStyles = createViewStyle(otherProps, themeObject);

  return [
    viewStyles,
    {
      fontFamily: fontFamily && themeObject.fonts[fontFamily],
      fontSize: fontSize && themeObject.fontSizes[fontSize],
      lineHeight:
        fontSize &&
        lineHeight &&
        themeObject.lineHeights[lineHeight](themeObject.fontSizes[fontSize]),
      letterSpacing: letterSpacing && themeObject.letterSpacings[letterSpacing],
    },
    fontWeight ? { fontWeight: themeObject.fontWeights[fontWeight] } : null,
  ];
};

export default createTextStyle;
