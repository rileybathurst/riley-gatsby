// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

export const Spacing = ({ primary }) => {
  const mode = primary ? 'storybook-Spacing--primary' : 'storybook-Spacing--secondary';
  return (
    <>
      Spacing
    </>
  );
};

Spacing.propTypes = {
  primary: PropTypes.bool,
};

Spacing.defaultProps = {
  primary: false,
};