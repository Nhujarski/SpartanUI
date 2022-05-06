import React from 'react';
import AudioIcon from '../components/LoadingIcons/AudioIcon';
import Wrapper from '../components/Wrapper/Wrapper';

export default {
  title: 'Components/Loading Icons/AudioIcon',
  component: AudioIcon,
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

export const Audio = ({ size, speed }) => {
  return (
    <Wrapper>
      <AudioIcon size={size} speed={speed} />
    </Wrapper>
  );
};

Audio.args = {
  size: 'small',
  speed: 0.75,
};
