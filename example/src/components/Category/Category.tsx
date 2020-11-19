import { Box, TextBlock } from '../../designSystem/theme';
import React from 'react';

export interface CategoryProps {
  text: string;
}

const Category = ({ text }: CategoryProps) => {
  return (
    <Box
      borderRadius="categoryPill"
      backgroundColor="categoryBackground01"
      paddingVertical="sm"
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="md"
      alignSelf="flex-start"
    >
      <TextBlock color="categoryText" fontSize="pill" fontWeight="normal">
        {text}
      </TextBlock>
    </Box>
  );
};

export default Category;
