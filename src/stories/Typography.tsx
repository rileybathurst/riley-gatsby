// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import "./typography.css";

export const Typography = ({ primary }) => {
  const mode = primary ? 'storybook-Typography--primary' : 'storybook-Typography--secondary';
  return (
    <>
      Typography<br />
      <br />
      Body Font Family
    </>
  );
};

Typography.propTypes = {
  primary: PropTypes.bool,
};

Typography.defaultProps = {
  primary: false,
};