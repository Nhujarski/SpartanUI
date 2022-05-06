import React from 'react';

import Input from '../components/Input/Input';
import Wrapper from '../components/Wrapper/Wrapper';
import { Button } from '../components/Button/Button';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    placeholder: { control: 'text' },
    bgColor: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});
//   args list for small input
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
//   args list for medium input
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
//   args list for large input
Large.args = {
  size: 'large',
};

export const LightMode = ({ placeholder, bgColor, size }) => {
  return (
    <Wrapper size={size} bgColor={bgColor}>
      <Input size={size} bgColor={bgColor} placeholder={placeholder} />
    </Wrapper>
  );
};
// args list for light mode input
LightMode.args = {
  size: 'medium',
  bgColor: 'light',
};

export const DarkMode = Template.bind({});
// args list for dark mode input
DarkMode.args = {
  size: 'medium',
  bgColor: 'dark',
};
