import React, { Children, useState } from 'react';
import type themeType from './theme/themeType';
import { createRexStore } from 'rex-state';
import {
  TextProps,
  View,
  Text,
  TextInputProps,
  TextInput,
  PressableProps,
  Pressable,
} from 'react-native';
import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle, ViewProps } from 'react-native';

const shadowMapping: {
  [key: number]: {
    shadowColor?: string;
    shadowOffset?: {
      width: number;
      height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;

    elevation?: number;
  };
} = {
  2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  6: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  8: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  12: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  16: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  24: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
};

export default function createThemeComponents<T extends themeType>(
  lightTheme: T,
  darkTheme?: T
) {
  const useThemeHook = (): [T, () => void] => {
    const [mode, setMode] = useState<'dark' | 'light'>('light');

    const toggleTheme = () => setMode(mode === 'dark' ? 'light' : 'dark');

    return [
      !darkTheme ? lightTheme : mode === 'light' ? lightTheme : darkTheme,
      toggleTheme,
    ];
  };

  const {
    useStore: useThemeStore,
    RexProvider: ThemeProvider,
  } = createRexStore(useThemeHook);

  const useTheme = () => {
    return useThemeStore()[0];
  };

  const useThemeToggle = () => {
    return useThemeStore()[1];
  };

  type spacingType = typeof lightTheme['spacing'];
  type radiusType = keyof typeof lightTheme['borderRadius'];
  type colorType = keyof typeof lightTheme['colors'];
  type zIndicesType = keyof typeof lightTheme['zIndices'];
  type fontSizesType = keyof typeof lightTheme['fontSizes'];
  type fontFamilyType = keyof typeof lightTheme['fonts'];
  type lineHeightType = keyof typeof lightTheme['lineHeights'];
  type fontWeightType = keyof typeof lightTheme['fontWeights'];
  type fontLetterSpacingType = keyof typeof lightTheme['letterSpacings'];
  // type iconSizesType = keyof typeof lightTheme['iconSizes'];
  type shadowType = keyof typeof lightTheme['shadows'];

  type borderRadiusType = {
    borderRadius?: radiusType;
    borderBottomEndRadius?: radiusType;
    borderBottomLeftRadius?: radiusType;
    borderBottomRightRadius?: radiusType;
    borderBottomStartRadius?: radiusType;
    borderTopEndRadius?: radiusType;
    borderTopLeftRadius?: radiusType;
    borderTopRightRadius?: radiusType;
    borderTopStartRadius?: radiusType;
  };

  type borderRadiusPropsType = keyof borderRadiusType;

  type colorValueType = {
    backgroundColor?: colorType;
    color?: colorType;
    borderColor?: colorType;
    borderRightColor?: colorType;
    borderLeftColor?: colorType;
    borderTopColor?: colorType;
    borderBottomColor?: colorType;
  };

  type colorValuePropsType = keyof colorValueType;

  type spacingValueType = {
    margin?: spacingType | number;
    marginBottom?: spacingType | number;
    marginEnd?: spacingType | number;
    marginHorizontal?: spacingType | number;
    marginVertical?: spacingType | number;
    marginLeft?: spacingType | number;
    marginRight?: spacingType | number;
    marginStart?: spacingType | number;
    marginTop?: spacingType | number;
    padding?: spacingType | number;
    paddingBottom?: spacingType | number;
    paddingEnd?: spacingType | number;
    paddingHorizontal?: spacingType | number;
    paddingVertical?: spacingType | number;
    paddingLeft?: spacingType | number;
    paddingRight?: spacingType | number;
    paddingStart?: spacingType | number;
    paddingTop?: spacingType | number;
  };

  type spacingValuePropsType = keyof spacingValueType;

  type zIndexValueType = {
    zIndex?: zIndicesType;
  };

  type zIndexPropsType = keyof zIndexValueType;

  type fontStyleValueType = {
    fontSize?: fontSizesType;
    fontFamily?: fontFamilyType;
    lineHeight?: lineHeightType;
    letterSpacing?: fontLetterSpacingType;
    fontWeight?: fontWeightType;
  };

  type fontStyleValuePropsType = keyof fontStyleValueType;

  type shadowStyleKeys =
    | 'elevation'
    | 'shadowColor'
    | 'shadowOffset'
    | 'shadowOpacity'
    | 'shadowRadius';

  type omittedViewTypes =
    | borderRadiusPropsType
    | colorValuePropsType
    | spacingValuePropsType
    | zIndexPropsType
    | shadowStyleKeys;

  type shadowValueType = {
    shadow?: shadowType;
  };

  type nonThemableViewStyles = Omit<ViewStyle, omittedViewTypes>;

  type omittedTextTypes = fontStyleValuePropsType | omittedViewTypes;

  type nonThemableTextStyles = Omit<TextStyle, omittedTextTypes>;

  interface CommonThemableTypes
    extends borderRadiusType,
      colorValueType,
      zIndexValueType,
      spacingValueType,
      shadowValueType {}

  interface ThemableViewStyle
    extends nonThemableViewStyles,
      CommonThemableTypes {
    children?: ReactNode;
  }

  interface ThemableTextStyle
    extends nonThemableTextStyles,
      CommonThemableTypes,
      fontStyleValueType {
    children?: ReactNode;
  }

  interface ThemeableTextInputStyle extends ThemableTextStyle {
    placeholderTextColor?: colorType;
  }

  const createShadowStyle = (shadowSize: number) => {
    return shadowMapping[shadowSize];
  };

  const getSpacing = <TGetSpacing extends ReturnType<typeof useThemeStore>[0]>(
    value: spacingType | number | undefined,
    themeObject: TGetSpacing
  ): number | undefined => {
    return value
      ? typeof value === 'number'
        ? value
        : themeObject.spacing[(value as unknown) as string]
      : value;
  };

  const createViewStyle = <
    TCreateViewStyle extends ReturnType<typeof useThemeStore>[0]
  >(
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
    themeObject: TCreateViewStyle
  ): StyleProp<ViewStyle> => {
    const colors: {
      [k in keyof colorValueType]?: string;
    } = {};

    if (backgroundColor) {
      colors.backgroundColor =
        themeObject.colors[(backgroundColor as unknown) as string];
    }

    if (color) {
      colors.color = themeObject.colors[(color as unknown) as string];
    }

    if (borderColor) {
      colors.borderColor =
        themeObject.colors[(borderColor as unknown) as string];
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
          themeObject.borderRadius[
            (borderBottomEndRadius as unknown) as string
          ],
        borderBottomLeftRadius:
          borderBottomLeftRadius &&
          themeObject.borderRadius[
            (borderBottomLeftRadius as unknown) as string
          ],
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

  const createTextStyle = <
    TCreateTextStyle extends ReturnType<typeof useThemeStore>[0]
  >(
    {
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      ...otherProps
    }: ThemableTextStyle,
    themeObject: TCreateTextStyle
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
          themeObject.lineHeights[(lineHeight as unknown) as string](
            themeObject.fontSizes[(fontSize as unknown) as string]
          ),
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

  interface BoxProps extends ThemableViewStyle {
    view?: ViewProps;
  }

  const Box = ({ children, view = {}, ...otherProps }: BoxProps) => {
    const [themeObject] = useThemeStore();

    return (
      <View {...view} style={createViewStyle(otherProps, themeObject)}>
        {children}
      </View>
    );
  };

  interface RowProps extends ThemableViewStyle {
    spacing?: spacingType;
    view?: ViewProps;
  }

  const Row = ({ children, spacing, view = {}, ...otherProps }: RowProps) => {
    const [themeObject] = useThemeStore();

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
                        themeObject.spacing[(spacing as unknown) as string],
                    }
                  : {
                      marginBottom:
                        themeObject.spacing[(spacing as unknown) as string],
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
        style={[createViewStyle(otherProps, themeObject), { flexDirection }]}
      >
        {childElements}
      </View>
    );
  };

  const Column = ({ flexDirection = 'column', ...otherProps }: RowProps) => {
    return <Row flexDirection={flexDirection} {...otherProps} />;
  };

  interface TextBlockProps extends ThemableTextStyle {
    text?: TextProps;
  }

  const TextBlock = ({
    text = {},
    children,
    ...otherProps
  }: TextBlockProps) => {
    const [themeObject] = useThemeStore();

    return (
      <Text {...text} style={createTextStyle(otherProps, themeObject)}>
        {children}
      </Text>
    );
  };

  type ThemedInputProps = Omit<
    TextInputProps,
    'placeholderTextColor' | 'underlineColorAndroid'
  >;

  interface InputProps extends ThemeableTextInputStyle {
    textInput?: ThemedInputProps;
    underlineColorAndroid?: colorType;
  }

  const InputText = ({
    textInput = {},
    underlineColorAndroid,
    placeholderTextColor,
    ...otherProps
  }: InputProps) => {
    const [themeObject] = useThemeStore();

    return (
      <TextInput
        {...textInput}
        underlineColorAndroid={
          underlineColorAndroid
            ? themeObject.colors[(underlineColorAndroid as unknown) as string]
            : undefined
        }
        placeholderTextColor={
          placeholderTextColor
            ? themeObject.colors[(placeholderTextColor as unknown) as string]
            : undefined
        }
        style={createTextStyle(otherProps, themeObject)}
      />
    );
  };

  type NonThemablePressableProps = Omit<PressableProps, 'style' | 'children'>;

  interface TouchableProps extends ThemableViewStyle {
    press?: NonThemablePressableProps;
    inactiveStyle?: ThemableViewStyle;
    pressedStyle?: ThemableViewStyle;
    pressedChildren?: ReactNode;
    inactiveChildren?: ReactNode;
  }

  const Touchable = ({
    children,
    pressedChildren,
    inactiveChildren,
    pressedStyle = {},
    inactiveStyle = {},
    press = {},
    ...otherProps
  }: TouchableProps) => {
    const [themeObject] = useThemeStore();
    return (
      <Pressable
        {...press}
        style={({ pressed }) => [
          createViewStyle(otherProps, themeObject),
          pressed
            ? createViewStyle(pressedStyle, themeObject)
            : createViewStyle(inactiveStyle, themeObject),
        ]}
      >
        {({ pressed }) => {
          return (
            <>
              {children}
              {pressed ? pressedChildren : inactiveChildren}
            </>
          );
        }}
      </Pressable>
    );
  };

  return {
    useThemeStore,
    useTheme,
    useThemeToggle,
    ThemeProvider,
    createViewStyle,
    Box,
    Row,
    Column,
    TextBlock,
    InputText,
    Touchable,
  };
}
