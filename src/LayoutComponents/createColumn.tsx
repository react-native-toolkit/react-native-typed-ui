import React from 'react';
import type { RowProps } from 'src/theme/themeTypes';
import type themeType from '../theme/theme';
import createRow from './createRow';

function createColumn<T extends themeType>(useTheme: () => T) {
  const Row = createRow(useTheme);

  const Column = ({ flexDirection = 'column', ...otherProps }: RowProps<T>) => {
    return <Row flexDirection={flexDirection} {...otherProps} />;
  };

  return Column;
}

export default createColumn;
