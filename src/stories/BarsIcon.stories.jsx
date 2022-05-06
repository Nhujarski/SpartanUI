import React from 'react';
import BarsIcon from '../components/LoadingIcons/BarsIcon';
import Wrapper from '../components/Wrapper/Wrapper';

export default {
  title: 'Components/Loading Icons/BarsIcon',
  component: BarsIcon,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    speed: {
      options: [0.5, 0.75, 1, 2],
      control: { type: 'radio' },
    },
  },
};

export const Bars = ({ size, speed }) => {
  return (
    <Wrapper>
      <BarsIcon size={size} speed={speed} />
    </Wrapper>
  );
};

Bars.args = {
  size: 'small',
};
