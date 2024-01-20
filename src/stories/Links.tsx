// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import "../styles/colors.css";
import "../styles/links.css";


export const Links = ({ primary }) => {
  const mode = primary ? 'storybook-Links--primary' : 'storybook-Links--secondary';
  return (
    <>
      <a href="#">Links</a>
    </>
  );
};

Links.propTypes = {
  primary: PropTypes.bool,
};

Links.defaultProps = {
  primary: false,
};