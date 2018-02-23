import React from 'react';
import { Link } from 'react-router-dom';

const ProjectNavItem = props => {
  console.log(props);
  const { url, isSelected, navigateToComponent, itemNumber } = props;
  const checkifSelected = () => {
    return isSelected
      ? <i className="fas fa-circle" />
      : <i className="far fa-circle" />;
  };
  return (
    <button
      onClick={() => {
        navigateToComponent(itemNumber);
      }}
    >
      {checkifSelected()}
    </button>
  );
};

export default ProjectNavItem;
