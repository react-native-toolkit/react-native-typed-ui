import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View,
  PixelRatio,
  StyleProp,
  ViewStyle,
} from 'react-native';

const Frame = ({
  children,
  containerStyle,
}: {
  children: ReactNode;
  containerStyle: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.frameContainer, containerStyle]}>{children}</View>
  );
};

const ratio = PixelRatio.get() / 4;

const styles = StyleSheet.create({
  frameContainer: {
    overflow: 'hidden',
    height: 1334 * ratio,
    width: 750 * ratio,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'black',
  },
});

export default Frame;
