import React from 'react';
import iphone from '../public/img/iphone-black.png';

const WorkItem = props => {
  return (
    <img
      className="mobile-display-right"
      src={iphone}
      alt="Work displayed on an iphone"
    />
  );
};

export default WorkItem;
