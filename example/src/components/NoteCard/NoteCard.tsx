import { Column, Row, TextBlock } from '../../designSystem/theme';
import React from 'react';
import Priority, { PriorityProps } from '../Priority/Priority';
import Category from '../Category/Category';
import TimeStamp from '../TimeStamp/TimeStamp';
import ProfilePic from '../ProfilePic/ProfilePic';

export interface NoteCardProps {
  note: string;
  date: string;
  priority: PriorityProps['priority'];
  categories: string[];
  pictureUrl: string;
}

const NoteCard = ({
  note,
  date,
  priority,
  categories,
  pictureUrl,
}: NoteCardProps) => {
  return (
    <Column
      backgroundColor="noteCardBackground"
      borderRadius="noteCard"
      padding="lg"
      borderColor="noteCardBorder"
      borderWidth={1}
      spacing="lg"
    >
      <Priority priority={priority} />
      <TextBlock
        fontSize="note"
        fontWeight="medium"
        lineHeight="note"
        color="noteText"
      >
        {note}
      </TextBlock>
      <Row spacing="sm">
        {categories.map((category: string) => (
          <Category text={category} key={category} />
        ))}
      </Row>
      <TimeStamp date={date} />
      <ProfilePic url={pictureUrl} />
    </Column>
  );
};

export default NoteCard;
