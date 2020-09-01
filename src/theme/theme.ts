export default interface theme {
  colors: {
    [color: string]: string;
  };
  fonts: {
    [font: string]: string;
  };
  fontSizes: {
    [fontSize: string]: number;
  };
  fontWeights: {
    [fontWeight: string]: string;
  };
  lineHeights: {
    [height: string]: number | undefined;
  };
  letterSpacings: {
    [spacing: string]: number;
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
    [radius: string]: number;
  };
  shadows: {
    [index: string]: number;
  };
}
