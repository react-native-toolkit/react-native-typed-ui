import React from 'react';
import { Row, TextBlock } from '../designSystem/theme';
import ThemeDecorator from './decorators/ThemeDecorator';

export default {
  title: 'Layout Components/Row',
  component: Row,
  argTypes: {},
  decorators: [ThemeDecorator],
};

const Template = (args) => <Row {...args} />;

export const DefaultRow = Template.bind({});
DefaultRow.args = {
  height: 250,
  width: 250,
  backgroundColor: 'grey100',
  children: <TextBlock>Hello...</TextBlock>,
};
