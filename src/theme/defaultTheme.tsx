const fontSizes = {
  'xs': 11,
  'sm': 12,
  'md': 13,
  'lg': 14,
  'xl': 15,
  '2xl': 17,
  '3xl': 20,
  '4xl': 24,
  '5xl': 28,
  '6xl': 36,
  '7xl': 48,
  '8xl': 64,
};

const lineHeights = {
  none: () => undefined,
  shorter: (fontSize: number) => fontSize * 1.25,
  short: (fontSize: number) => fontSize * 1.375,
  base: (fontSize: number) => fontSize * 1.5,
  tall: (fontSize: number) => fontSize * 1.625,
  taller: (fontSize: number) => fontSize * 2,
};

const fonts = {
  primaryRegular: 'SourceSansPro-Regular',
  primarySemiBold: 'SourceSansPro-SemiBold',
  primaryBold: 'SourceSansPro-Bold',
};

const fontWeights: {
  normal: 'normal';
  medium: '500';
  bold: 'bold';
} = {
  normal: 'normal',
  medium: '500',
  bold: 'bold',
};

const letterSpacings = {
  tighter: -0.5,
  tight: -0.25,
  normal: 0,
  wide: 1,
  wider: 2,
  widest: 3,
};

const spacing = {
  'none': 0,
  '2xs': 2,
  'xs': 4,
  'sm': 6,
  'md': 8,
  'lg': 12,
  'xl': 16,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 56,
  '7xl': 64,
};

const zIndices = {
  hide: -1,
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

const iconSizes = {
  'xs': 4,
  'sm': 6,
  'md': 8,
  'lg': 12,
  'xl': 14,
  '2xl': 16,
  '3xl': 20,
  '4xl': 24,
};

const borderRadius = {
  'none': 0,
  'xs': 2,
  'sm': 4,
  'md': 6,
  'lg': 8,
  'xl': 12,
  '2xl': 16,
  'circle': 10000,
};

const colors = {
  brand000: '#ECE4F6',
  brand100: '#E1D5F1',
  brand200: '#C5AFE4',
  brand300: '#A989D7',
  brand400: '#8D63CA',
  brand500: '#7E4FC3',
  brand600: '#7140BA',
  brand700: '#6639A7',
  brand800: '#5A3394',
  brand900: '#4F2C81',
  brand1000: '#44266E',
  red000: '#FDECEF',
  red100: '#FAC7CE',
  red200: '#F7A1AE',
  red300: '#F47B8E',
  red400: '#F15F75',
  red500: '#EF435D',
  red600: '#D73C54',
  red700: '#BF364A',
  red800: '#A72F41',
  red900: '#8F2838',
  red1000: '#78212E',
  green000: '#E5F9F3',
  green100: '#B2EEDA',
  green200: '#80E3C2',
  green300: '#4CD7A9',
  green400: '#26CF96',
  green500: '#00C684',
  green600: '#00B277',
  green700: '#009E6A',
  green800: '#008B5C',
  green900: '#00774F',
  green1000: '#006342',
  yellow000: '#FFFAEB',
  yellow100: '#FFEFC2',
  yellow200: '#FFE499',
  yellow300: '#FFD970',
  yellow400: '#FFD152',
  yellow500: '#FFC933',
  yellow600: '#E5B52E',
  yellow700: '#CCA129',
  yellow800: '#B38D24',
  yellow900: '#99791F',
  yellow1000: '#806519',
  grey000: '#F7F7F7',
  grey100: '#E5E5E5',
  grey200: '#D4D4D4',
  grey300: '#C3C3C3',
  grey400: '#B7B7B7',
  grey500: '#AAAAAA',
  grey600: '#999999',
  grey700: '#888888',
  grey800: '#777777',
  grey900: '#666666',
  grey1000: '#555555',
  grey1100: '#444444',
  grey1200: '#333333',
  backgroundColor: '#FFFFFF',
  black: '#000000',
};

const shadows = {
  'xs': 2,
  'sm': 4,
  'md': 6,
  'lg': 8,
  'xl': 12,
  '2xl': 16,
  '3xl': 24,
};

const defaultTheme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  spacing,
  zIndices,
  iconSizes,
  borderRadius,
  shadows,
};

export default defaultTheme;
