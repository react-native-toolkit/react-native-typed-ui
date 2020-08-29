import type theme from './theme';
import type { ViewStyle, TextStyle } from 'react-native';
import type { ReactNode } from 'react';

export type spacingType = keyof typeof theme['spacing'];
export type radiusType = keyof typeof theme['borderRadius'];
export type colorType = keyof typeof theme['colors'];
export type zIndicesType = keyof typeof theme['zIndices'];
export type fontSizesType = keyof typeof theme['fontSizes'];
export type fontFamilyType = keyof typeof theme['fonts'];
export type lineHeightType = keyof typeof theme['lineHeights'];
export type fontWeightType = keyof typeof theme['fontWeights'];
export type fontLetterSpacingType = keyof typeof theme['letterSpacings'];
export type iconSizesType = keyof typeof theme['iconSizes'];
export type shadowType = keyof typeof theme['shadows'];

export type borderRadiusType = {
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

export type borderRadiusPropsType = keyof borderRadiusType;

export type colorValueType = {
  backgroundColor?: colorType;
  color?: colorType;
  borderColor?: colorType;
  borderRightColor?: colorType;
  borderLeftColor?: colorType;
  borderTopColor?: colorType;
  borderBottomColor?: colorType;
};

export type colorValuePropsType = keyof colorValueType;

export type spacingValueType = {
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

export type spacingValuePropsType = keyof spacingValueType;

export type zIndexValueType = {
  zIndex?: zIndicesType;
};

export type zIndexPropsType = keyof zIndexValueType;

export type fontStyleValueType = {
  fontSize?: fontSizesType;
  fontFamily?: fontFamilyType;
  lineHeight?: lineHeightType;
  letterSpacing?: fontLetterSpacingType;
  fontWeight?: fontWeightType;
};

export type fontStyleValuePropsType = keyof fontStyleValueType;

export type shadowStyleKeys =
  | 'elevation'
  | 'shadowColor'
  | 'shadowOffset'
  | 'shadowOpacity'
  | 'shadowRadius';

export type omittedViewTypes =
  | borderRadiusPropsType
  | colorValuePropsType
  | spacingValuePropsType
  | zIndexPropsType
  | shadowStyleKeys;

export type shadowValueType = {
  shadow?: shadowType;
};

export type nonThemableViewStyles = Omit<ViewStyle, omittedViewTypes>;

export type omittedTextTypes = fontStyleValuePropsType | omittedViewTypes;

export type nonThemableTextStyles = Omit<TextStyle, omittedTextTypes>;

export interface CommonThemableTypes
  extends borderRadiusType,
    colorValueType,
    zIndexValueType,
    spacingValueType,
    shadowValueType {}

export interface ThemableViewStyle
  extends nonThemableViewStyles,
    CommonThemableTypes {
  children?: ReactNode;
}

export interface ThemableTextStyle
  extends nonThemableTextStyles,
    CommonThemableTypes,
    fontStyleValueType {
  children?: ReactNode;
}

export interface ThemeableTextInputStyle extends ThemableTextStyle {
  placeholderTextColor?: colorType;
}
