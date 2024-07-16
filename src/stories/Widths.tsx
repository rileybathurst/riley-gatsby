// this is the Name.tsx file
import React from 'react';

interface WidthsProps {
  primary?: boolean;
  onClick?: () => void;
}

function Widths(widths) {

  // TODO: didnt have reference
  /*   return (
      widths.map((width)
  
      )
    ) */
}

export const Widths = ({
  primary = false,
  ...props
}: WidthsProps) => {

  return (
    <>
      Widths
      <Widths widths={{ vulture, stork, condor, pelican, albatross }} />
    </>
  );
};