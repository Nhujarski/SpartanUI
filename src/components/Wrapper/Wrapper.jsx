import React from 'react';
import PropTypes from 'prop-types';
import './wrapper.css';

const Wrapper = ({ size, bgColor, children }) => {
  let approvedBgColors = ['light', 'dark'];
  return (
    <div
      className={[
        'sui-wrapper',
        `sui-wrapper-${size}`,
        `sui-wrapper-${approvedBgColors.includes(bgColor) ? bgColor : 'light'}`,
      ].join(' ')}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
  bgColor: PropTypes.string,
};

Wrapper.defaultProps = {
  size: 'medium',
  bgColor: 'light',
};

export default Wrapper;
