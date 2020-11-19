import type { ReactNode } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import type themeType from './theme';

export type themeModeTypes = 'dark' | 'light';

export type spacingType<T extends themeType> = keyof T['spacing'];
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

export interface ThemableTextStyle<T extends themeType>
  extends nonThemableTextStyles<T>,
    CommonThemableTypes<T>,
    fontStyleValueType<T> {
  children?: ReactNode;
}
