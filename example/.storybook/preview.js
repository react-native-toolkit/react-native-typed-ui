import React from 'react';
import { ThemeProvider } from '../src/designSystem/theme';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.light,
  },
  viewMode: 'docs',
  storySort: {
    order: [
      'Basics',
      ['Getting Started', 'Theme'],
      'Components',
      ['TextBlock', 'Touchable', 'InputText'],
      'Layout Components',
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
