import type { TextStyle, ViewStyle } from 'react-native';

export default interface theme {
  colors: {
    [color: string]: ViewStyle['backgroundColor'];
  };
  fonts: {
    [font: string]: TextStyle['fontFamily'];
  };
  fontSizes: {
    [fontSize: string]: TextStyle['fontSize'];
  };
  fontWeights: {
    [fontWeight: string]: TextStyle['fontWeight'];
  };
  lineHeights: {
    [height: string]: TextStyle['lineHeight'];
  };
  letterSpacings: {
    [spacing: string]: TextStyle['letterSpacing'];
  };
  spacing: {
    [spacing: string]: number;
  };
  zIndices: {
    [index: string]: number;
  };
  iconSizes: {
    [size: string]: number;
  };
  borderRadius: {
    [radius: string]: ViewStyle['borderRadius'];
  };
  shadows: {
    [index: string]: 2 | 4 | 6 | 8 | 12 | 16 | 24;
  };
}
