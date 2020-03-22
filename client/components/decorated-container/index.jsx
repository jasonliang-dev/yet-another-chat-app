import React from 'react';
import PropTypes from 'prop-types';
import DottedBackground from '#/components/dotted-background';

function DecoratedContainer({ children }) {
  return (
    <DottedBackground className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>
    </DottedBackground>
  );
}

DecoratedContainer.propTypes = {
  children: PropTypes.node,
};

DecoratedContainer.defaultProps = {
  children: null,
};

export default DecoratedContainer;
