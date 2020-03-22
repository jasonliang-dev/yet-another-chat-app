import React from 'react';
import PropTypes from 'prop-types';
import bgImg from '#/assets/images/dot-grid.png';
// Background pattern from Toptal Subtle Patterns
// https://www.toptal.com/designers/subtlepatterns/

function DottedBackground({ style, ...rest }) {
  return (
    <div style={{ backgroundImage: `url(${bgImg})`, ...style }} {...rest} />
  );
}

DottedBackground.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

DottedBackground.defaultProps = {
  className: '',
  style: {},
};

export default DottedBackground;
