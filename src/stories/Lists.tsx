// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/typography.css';
import '../styles/lists.css'

export const Lists = ({ primary }) => {
  const mode = primary ? 'storybook-Lists--primary' : 'storybook-Lists--secondary';
  return (
    <ul>
      <li>one</li>
      <li>two</li>
    </ul>
  );
};

Lists.propTypes = {
  primary: PropTypes.bool,
};

Lists.defaultProps = {
  primary: false,
};