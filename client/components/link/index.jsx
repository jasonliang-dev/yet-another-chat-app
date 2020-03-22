import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

function Link({ to, children }) {
  return (
    <RouterLink className="text-teal-600 underline hover:text-teal-700" to={to}>
      {children}
    </RouterLink>
  );
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  to: '#',
  children: null,
};

export default Link;
