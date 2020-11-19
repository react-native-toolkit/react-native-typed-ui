import { TextBlock } from '../../designSystem/theme';
import React from 'react';

export interface NoteHeaderProps {
  text: string;
}

const NoteHeader = ({ text }: NoteHeaderProps) => {
  return (
    <TextBlock
      color="headerText"
      fontSize="header"
      fontWeight="medium"
      fontFamily="primaryMedium"
    >
      {text}
    </TextBlock>
  );
};

export default NoteHeader;
