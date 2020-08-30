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

export type spacingType<T extends themeType> = T['spacing'];
export type radiusType<T extends themeType> = keyof T['borderRadius'];
export type colorType<T extends themeType> = keyof T['colors'];
export type zIndicesType<T extends themeType> = keyof T['zIndices'];
export type fontSizesType<T extends themeType> = keyof T['fontSizes'];
export type fontFamilyType<T extends themeType> = keyof T['fonts'];
export type lineHeightType<T extends themeType> = keyof T['lineHeights'];
export type fontWeightType<T extends themeType> = keyof T['fontWeights'];
export type fontLetterSpacingType<
  T extends themeType
> = keyof T['letterSpacings'];
export type iconSizesType<T extends themeType> = keyof T['iconSizes'];
export type shadowType<T extends themeType> = keyof T['shadows'];

export type borderRadiusType<T extends themeType> = {
  borderRadius?: radiusType<T>;
  borderBottomEndRadius?: radiusType<T>;
  borderBottomLeftRadius?: radiusType<T>;
  borderBottomRightRadius?: radiusType<T>;
  borderBottomStartRadius?: radiusType<T>;
  borderTopEndRadius?: radiusType<T>;
  borderTopLeftRadius?: radiusType<T>;
  borderTopRightRadius?: radiusType<T>;
  borderTopStartRadius?: radiusType<T>;
};

export type borderRadiusPropsType<T extends themeType> = keyof borderRadiusType<
  T
>;

export type colorValueType<T extends themeType> = {
  backgroundColor?: colorType<T>;
  color?: colorType<T>;
  borderColor?: colorType<T>;
  borderRightColor?: colorType<T>;
  borderLeftColor?: colorType<T>;
  borderTopColor?: colorType<T>;
  borderBottomColor?: colorType<T>;
};

export type colorValuePropsType<T extends themeType> = keyof colorValueType<T>;

export type spacingValueType<T extends themeType> = {
  margin?: spacingType<T> | number;
  marginBottom?: spacingType<T> | number;
  marginEnd?: spacingType<T> | number;
  marginHorizontal?: spacingType<T> | number;
  marginVertical?: spacingType<T> | number;
  marginLeft?: spacingType<T> | number;
  marginRight?: spacingType<T> | number;
  marginStart?: spacingType<T> | number;
  marginTop?: spacingType<T> | number;
  padding?: spacingType<T> | number;
  paddingBottom?: spacingType<T> | number;
  paddingEnd?: spacingType<T> | number;
  paddingHorizontal?: spacingType<T> | number;
  paddingVertical?: spacingType<T> | number;
  paddingLeft?: spacingType<T> | number;
  paddingRight?: spacingType<T> | number;
  paddingStart?: spacingType<T> | number;
  paddingTop?: spacingType<T> | number;
};

export type spacingValuePropsType<T extends themeType> = keyof spacingValueType<
  T
>;

export type zIndexValueType<T extends themeType> = {
  zIndex?: zIndicesType<T>;
};

export type zIndexPropsType<T extends themeType> = keyof zIndexValueType<T>;

export type fontStyleValueType<T extends themeType> = {
  fontSize?: fontSizesType<T>;
  fontFamily?: fontFamilyType<T>;
  lineHeight?: lineHeightType<T>;
  letterSpacing?: fontLetterSpacingType<T>;
  fontWeight?: fontWeightType<T>;
};

export type fontStyleValuePropsType<
  T extends themeType
> = keyof fontStyleValueType<T>;

export type shadowStyleKeys =
  | 'elevation'
  | 'shadowColor'
  | 'shadowOffset'
  | 'shadowOpacity'
  | 'shadowRadius';

export type omittedViewTypes<T extends themeType> =
  | borderRadiusPropsType<T>
  | colorValuePropsType<T>
  | spacingValuePropsType<T>
  | zIndexPropsType<T>
  | shadowStyleKeys;

export type shadowValueType<T extends themeType> = {
  shadow?: shadowType<T>;
};

export type nonThemableViewStyles<T extends themeType> = Omit<
  ViewStyle,
  omittedViewTypes<T>
>;

export type omittedTextTypes<T extends themeType> =
  | fontStyleValuePropsType<T>
  | omittedViewTypes<T>;

export type nonThemableTextStyles<T extends themeType> = Omit<
  TextStyle,
  omittedTextTypes<T>
>;

export interface CommonThemableTypes<T extends themeType>
  extends borderRadiusType<T>,
    colorValueType<T>,
    zIndexValueType<T>,
    spacingValueType<T>,
    shadowValueType<T> {}

export interface ThemableViewStyle<T extends themeType>
  extends nonThemableViewStyles<T>,
    CommonThemableTypes<T> {
  children?: ReactNode;
}

export interface ThemableTextStyle<T extends themeType>
  extends nonThemableTextStyles<T>,
    CommonThemableTypes<T>,
    fontStyleValueType<T> {
  children?: ReactNode;
}

export interface ThemeableTextInputStyle<T extends themeType>
  extends ThemableTextStyle<T> {
  placeholderTextColor?: colorType<T>;
}

export interface BoxProps<T extends themeType> extends ThemableViewStyle<T> {
  view?: ViewProps;
}

export interface RowProps<T extends themeType> extends ThemableViewStyle<T> {
  spacing?: spacingType<T>;
  view?: ViewProps;
}

export interface TextBlockProps<T extends themeType>
  extends ThemableTextStyle<T> {
  text?: TextProps;
}

export type ThemedInputProps = Omit<
  TextInputProps,
  'placeholderTextColor' | 'underlineColorAndroid'
>;

export interface InputProps<T extends themeType>
  extends ThemeableTextInputStyle<T> {
  textInput?: ThemedInputProps;
  underlineColorAndroid?: colorType<T>;
}

export type NonThemablePressableProps = Omit<
  PressableProps,
  'style' | 'children'
>;

export interface TouchableProps<T extends themeType>
  extends ThemableViewStyle<T> {
  press?: NonThemablePressableProps;
  inactiveStyle?: ThemableViewStyle<T>;
  pressedStyle?: ThemableViewStyle<T>;
  pressedChildren?: ReactNode;
  inactiveChildren?: ReactNode;
}

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

  const createShadowStyle = (shadowSize: number) => {
    return shadowMapping[shadowSize];
  };

  const getSpacing = <TGetSpacing extends ReturnType<typeof useThemeStore>[0]>(
    value:
      | spacingType<ReturnType<typeof useThemeStore>[0]>
      | number
      | undefined,
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
    }: ThemableViewStyle<ReturnType<typeof useThemeStore>[0]>,
    themeObject: TCreateViewStyle
  ): StyleProp<ViewStyle> => {
    const colors: {
      [k in keyof colorValueType<ReturnType<typeof useThemeStore>[0]>]?: string;
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
    }: ThemableTextStyle<ReturnType<typeof useThemeStore>[0]>,
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

  const Box = ({
    children,
    view = {},
    ...otherProps
  }: BoxProps<ReturnType<typeof useThemeStore>[0]>) => {
    const [themeObject] = useThemeStore();

    return (
      <View {...view} style={createViewStyle(otherProps, themeObject)}>
        {children}
      </View>
    );
  };

  const Row = ({
    children,
    spacing,
    view = {},
    ...otherProps
  }: RowProps<ReturnType<typeof useThemeStore>[0]>) => {
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

  const Column = ({
    flexDirection = 'column',
    ...otherProps
  }: RowProps<ReturnType<typeof useThemeStore>[0]>) => {
    return <Row flexDirection={flexDirection} {...otherProps} />;
  };

  const TextBlock = ({
    text = {},
    children,
    ...otherProps
  }: TextBlockProps<ReturnType<typeof useThemeStore>[0]>) => {
    const [themeObject] = useThemeStore();

    return (
      <Text {...text} style={createTextStyle(otherProps, themeObject)}>
        {children}
      </Text>
    );
  };

  const InputText = ({
    textInput = {},
    underlineColorAndroid,
    placeholderTextColor,
    ...otherProps
  }: InputProps<ReturnType<typeof useThemeStore>[0]>) => {
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

  const Touchable = ({
    children,
    pressedChildren,
    inactiveChildren,
    pressedStyle = {},
    inactiveStyle = {},
    press = {},
    ...otherProps
  }: TouchableProps<ReturnType<typeof useThemeStore>[0]>) => {
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
