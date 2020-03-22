import React from 'react';
import PropTypes from 'prop-types';
import Button from '#/components/button';
import Card from '#/components/card';

function UserCardForm({
  header,
  alt,
  image,
  children,
  buttonText,
  underButton,
  onSubmit,
}) {
  return (
    <Card
      className="overflow-x-hidden border-solid border-teal-500 border-t-4"
      tabIndex="-1"
    >
      <div className="flex w-full">
        <div style={{ width: 300 }}>
          <h1 className="text-4xl font-light mb-4">{header}</h1>
          <form onSubmit={onSubmit}>
            {children}
            <Button
              className="w-full bg-teal-700 hover:bg-teal-800 text-gray-100"
              type="submit"
              overrideColors
            >
              {buttonText}
            </Button>
          </form>
          <div className="mt-3">{underButton}</div>
        </div>
        <div className="ml-12 -mr-20">
          <img className="w-64" alt={alt} src={image} />
        </div>
      </div>
    </Card>
  );
}

UserCardForm.propTypes = {
  header: PropTypes.string.isRequired,
  alt: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
  buttonText: PropTypes.string,
  underButton: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

UserCardForm.defaultProps = {
  buttonText: 'Login',
  alt: '',
  image: '',
  underButton: null,
  children: [],
};

export default UserCardForm;
