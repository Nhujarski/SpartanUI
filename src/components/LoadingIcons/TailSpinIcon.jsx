import React from 'react';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loading-icons';
import './icon.css';

const TailSpinIcon = ({ size, speed }) => {
  // approved speeds to control speed of icon animation
  const approvedSpeed = [0.5, 0.75, 1, 2];
  return (
    <div className='sui-loading-wrapper'>
      <TailSpin
        className={['sui-icon', `sui-icon-${size}`].join(' ')}
        speed={approvedSpeed.includes(speed) ? speed : 0.75}
      />
      <h4 className='sui-icon-text'>Loading...</h4>
    </div>
  );
};

TailSpin.propTypes = {
  size: PropTypes.string,
  speed: PropTypes.number,
};

TailSpin.defaultProps = {
  size: 'small',
  speed: 0.75,
};

export default TailSpinIcon;
