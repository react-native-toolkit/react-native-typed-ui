import React from 'react';
import Row, { RowProps } from '../Row/Row';

const Column = ({ flexDirection = 'column', ...otherProps }: RowProps) => {
  return <Row flexDirection={flexDirection} {...otherProps} />;
};

export default Column;
