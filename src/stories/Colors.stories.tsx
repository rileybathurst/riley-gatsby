// this is the Name.stories.jsx file
import React from 'react';
import { Colors } from './Colors';

export default {
  title: 'Atoms/Colors',
  component: Colors,
};

const Template = (args) => <Colors {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Colors',
};