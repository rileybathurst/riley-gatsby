// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import "../styles/variables.css";
import "../styles/typography.css";

export const Typography = ({ primary }) => {
  const mode = primary ? 'storybook-Typography--primary' : 'storybook-Typography--secondary';
  return (
    <>
      Typography<br />
      Body Font Family<br />

      <h1>everest</h1>
      <h2>aconcagua</h2>
      <h3>denali</h3>
      <h4>kilimanjaro</h4>
      <h5>elbrus</h5>
      <h6>vinson_massif</h6>
      <small>kosciuszko</small>
      <p>p</p>
      <p>this text includes a <span className='selection'>selection</span> on a span</p>
      <p className='sr-only'>screen reader text</p>
      {/* TODO: */}
      <blockquote>

      </blockquote>
    </>
  );
};

Typography.propTypes = {
  primary: PropTypes.bool,
};

Typography.defaultProps = {
  primary: false,
};