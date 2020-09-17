const fontWeights: { normal: 'normal' } = { normal: 'normal' };

export const loginThemeOne = {
  colors: {
    brand: '#5DB075',
    text: '#666666',
    placeholder: '#BDBDBD',
    placeholderBackground: '#F6F6F6',
    title: 'black',
    background: 'white',
  },
  fonts: {
    primary: 'roboto',
  },
  fontSizes: {
    normalText: 16,
    infoText: 14,
    titleText: 30,
  },
  fontWeights,
  lineHeights: {},
  letterSpacings: {
    title: 1.2,
  },
  spacing: {
    normal: 16,
    large: 32,
  },
  zIndices: {},
  iconSizes: {
    normal: 16,
  },
  borderRadius: {
    inputField: 8,
    button: 100,
  },
  shadows: {},
};

export const loginThemeOneDark = {
  ...loginThemeOne,
  colors: {
    ...loginThemeOne.colors,
    title: 'white',
    background: 'black',
  },
};

export const loginThemeTwo = {
  colors: {
    brand: '#757de8',
    text: '#666666',
    placeholder: '#BDBDBD',
    placeholderBackground: '#F6F6F6',
    title: 'black',
    background: 'white',
  },
  fonts: {
    primary: 'grandStander',
  },
  fontSizes: {
    normalText: 16,
    infoText: 14,
    titleText: 30,
  },
  fontWeights,
  lineHeights: {},
  letterSpacings: {
    title: 1.2,
  },
  spacing: {
    normal: 16,
    large: 32,
  },
  zIndices: {},
  iconSizes: {
    normal: 16,
  },
  borderRadius: {
    inputField: 8,
    button: 100,
  },
  shadows: {},
};

export const loginThemeTwoDark = {
  ...loginThemeTwo,
  colors: {
    ...loginThemeTwo.colors,
    title: 'white',
    background: 'black',
  },
};

export const loginThemeThree = {
  colors: {
    brand: '#ff7961',
    text: '#666666',
    placeholder: '#BDBDBD',
    placeholderBackground: '#F6F6F6',
    title: 'black',
    background: 'white',
  },
  fonts: {
    primary: 'kufam',
  },
  fontSizes: {
    normalText: 16,
    infoText: 14,
    titleText: 30,
  },
  fontWeights,
  lineHeights: {},
  letterSpacings: {
    title: 1.2,
  },
  spacing: {
    normal: 16,
    large: 32,
  },
  zIndices: {},
  iconSizes: {
    normal: 16,
  },
  borderRadius: {
    inputField: 8,
    button: 100,
  },
  shadows: {},
};

export const loginThemeThreeDark = {
  ...loginThemeThree,
  colors: {
    ...loginThemeThree.colors,
    title: 'white',
    background: 'black',
  },
};
