import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './input.css';

const Input = ({ size, placeholder, bgColor }) => {
  const [inputVal, setInputVal] = useState('');
  let approvedBgColors = ['light', 'dark'];

  return (
    <input
      type='text'
      className={[
        'sui-input',
        `sui-input-${size}`,
        `sui-input-${approvedBgColors.includes(bgColor) ? bgColor : 'light'}`,
      ].join(' ')}
      size={size}
      placeholder={placeholder}
      value={inputVal}
      onChange={(e) => {
        setInputVal(e.target.value);
      }}
    />
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  size: 'medium',
  placeholder: 'Please enter a value',
};

export default Input;
