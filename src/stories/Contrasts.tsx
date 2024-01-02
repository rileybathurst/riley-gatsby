// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

export const Contrasts = ({ primary }) => {
  const mode = primary ? 'storybook-Contrasts--primary' : 'storybook-Contrasts--secondary';
  return (
    <>
      Contrasts<br />
      <br />
      Cherry on Brilliance 4.6:1 AA<br />
      Cherry on Kingly Cloud 3.6:1 AA Large<br />
      Cherry on Black Out 3.4:1 AA Large
      Cherry on Black Metal 4.10:1 AA Large

      <br />
      Neutral up or down four steps
    </>
  );
};

Contrasts.propTypes = {
  primary: PropTypes.bool,
};

Contrasts.defaultProps = {
  primary: false,
};