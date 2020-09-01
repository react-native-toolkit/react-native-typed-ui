import React from 'react';
import { ThemeProvider } from '../../designSystem/theme';

const ThemeDecorator = (Story: any) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

export default ThemeDecorator;
