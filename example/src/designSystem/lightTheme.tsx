import type { TextStyle } from 'react-native';

const fontSizes = {
  header: 16,
  note: 12,
  pill: 10,
  timeStamp: 11,
  addIcon: 48,
};

const lineHeights = {
  note: 1.5,
};

const fonts = {
  primary: 'poppinsRegular',
  primaryMedium: 'poppinsMedium',
};

const fontWeights: {
  normal: TextStyle['fontWeight'];
  medium: TextStyle['fontWeight'];
} = {
  medium: '500',
  normal: 'normal',
};

const letterSpacings = {};

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

const iconSizes = {};

const borderRadius = {
  noteCard: 4,
  categoryPill: 4,
  priorityPill: 20,
  circle: 10000,
};

const colors = {
  headerText: '#000000',
  lowPriorityBackground: '#B8EBB0',
  mediumPriorityBackground: '#F0CA81',
  highPriorityBackground: '#DE1D3E',
  noteText: '#221C1D',
  lowPriorityText: '#221C1D',
  mediumPriorityText: '#221C1D',
  highPriorityText: '#ffffff',
  categoryText: '#ffffff',
  timeStampText: '#666666',
  backgroundColor: '#F9F9F9',
  noteCardBackground: '#ffffff',
  categoryBackground01: '#DE1D6E',
  categoryBackground02: '#4F1DDE',
  noteCardBorder: '#666666',
  profilePicBorder: '#000000',
  addIconText: '#ffffff',
  addIconBackground: '#3DA9FC',
};

const shadows: {
  'xs': 2;
  'sm': 4;
  'md': 6;
  'lg': 8;
  'xl': 12;
  '2xl': 16;
  '3xl': 24;
} = {
  'xs': 2,
  'sm': 4,
  'md': 6,
  'lg': 8,
  'xl': 12,
  '2xl': 16,
  '3xl': 24,
};

const lightTheme = {
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

export default lightTheme;
