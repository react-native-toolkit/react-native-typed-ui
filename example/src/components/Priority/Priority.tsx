import React from 'react';
import { Box, ColorProp, TextBlock } from '../../designSystem/theme';

export interface PriorityProps {
  priority: 'low' | 'medium' | 'high';
}

const Priority = ({ priority }: PriorityProps) => {
  let fontColor: ColorProp;
  let backgroundColor: ColorProp;
  let text: string;

  switch (priority) {
    case 'low':
      fontColor = 'lowPriorityText';
      backgroundColor = 'lowPriorityBackground';
      text = 'Low';
      break;
    case 'medium':
      fontColor = 'mediumPriorityText';
      backgroundColor = 'mediumPriorityBackground';
      text = 'Medium';
      break;
    case 'high':
    default:
      fontColor = 'highPriorityText';
      backgroundColor = 'highPriorityBackground';
      text = 'High';
  }

  return (
    <Box
      borderRadius="priorityPill"
      backgroundColor={backgroundColor}
      paddingVertical="sm"
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="md"
      alignSelf="flex-start"
    >
      <TextBlock color={fontColor} fontSize="pill" fontWeight="normal">
        {text}
      </TextBlock>
    </Box>
  );
};

export default Priority;
