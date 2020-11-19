import { TextBlock } from '../../designSystem/theme';
import React from 'react';

export interface TimeStampProps {
  date: string;
}

const TimeStamp = ({ date }: TimeStampProps) => {
  return (
    <TextBlock color={'timeStampText'} fontWeight="normal" fontSize="timeStamp">
      {date}
    </TextBlock>
  );
};

export default TimeStamp;
