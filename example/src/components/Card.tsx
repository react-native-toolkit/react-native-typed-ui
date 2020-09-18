import React from 'react';
import { Box, TextBlock, themeType } from '../designSystem/theme';
import type { colorType } from 'react-native-typed-ui';

export interface cardProps {
  backgroundColor: colorType<themeType>;
}

const Card = ({ backgroundColor }: cardProps) => {
  return (
    <Box backgroundColor={backgroundColor} borderRadius="lg" padding="2xl">
      <TextBlock>A simple card</TextBlock>
    </Box>
  );
};

export default Card;
