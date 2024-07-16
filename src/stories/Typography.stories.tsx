// this is the Name.stories.jsx file
import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Typography',
};