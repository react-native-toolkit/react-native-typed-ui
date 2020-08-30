import React, { Children, useState } from 'react';
import type themeType from './theme/theme';
import { createRexStore } from 'rex-state';
import { View, Text, TextInput, Pressable } from 'react-native';
import type {
  BoxProps,
  RowProps,
  TextBlockProps,
  InputProps,
  TouchableProps,
} from './theme/themeTypes';
import createViewStyle from './themeUtils/createViewStyle';
import createTextStyle from './themeUtils/createTextStyle';

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
