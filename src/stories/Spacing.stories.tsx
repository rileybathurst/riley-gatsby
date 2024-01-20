// this is the Name.stories.jsx file
import React from 'react';
import { Spacing } from './Spacing';

export default {
  title: 'Spacing',
  component: Spacing,
};

const Template = (args) => <Spacing {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Spacing',
};