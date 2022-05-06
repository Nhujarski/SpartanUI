import React from 'react';
import TailSpinIcon from '../components/LoadingIcons/TailSpinIcon';
import Wrapper from '../components/Wrapper/Wrapper';

export default {
  title: 'Components/Loading Icons/TailSpinIcon',
  component: TailSpinIcon,
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

export const TailSpin = ({ size, speed }) => {
  return (
    <Wrapper>
      <TailSpinIcon size={size} speed={speed} />
    </Wrapper>
  );
};

TailSpin.args = {
  size: 'small',
};
