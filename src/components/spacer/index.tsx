import React from 'react';

type SpacerProps = {
  width: number,
  height: number
}

const Spacer = ({ width, height }: SpacerProps) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }} />;
};

Spacer.defaultProps = {
  height: 0,
  width: 0
};

export default Spacer;
