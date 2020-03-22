import React from 'react';
import PropTypes from 'prop-types';

const classes = [
  'px-4',
  'py-2',
  'rounded',
  'shadow',
  'hover:shadow-md',
  'focus:shadow-outline',
  'cursor-pointer',
].join(' ');

const colors = 'bg-gray-700 hover:bg-gray-800 text-gray-100';

function Button({ className, children, type, overrideColors, ...rest }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`${overrideColors ? '' : colors} ${classes} ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  overrideColors: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  children: null,
  type: 'button',
  overrideColors: false,
};

export default Button;
