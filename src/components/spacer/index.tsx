import React from 'react';

const Spacer = ({ width, height }) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }} />;
};

Spacer.defaultProps = {
  height: 0,
  width: 0
};

export default Spacer;
