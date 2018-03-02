import React from 'react';
import iphone from '../public/img/iphone9.png';

const WorkItem = ({ screen, title }) => {
  return (
    <div className="mobile-display">
      <img
        className="mobile-screen"
        src={require(`../public/img/${screen}`)}
        alt={title}
      />
    </div>
  );
};

export default WorkItem;
