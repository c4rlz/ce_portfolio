import React from 'react';
import ProjectNavItem from './ProjectNavItem';

const ProjectNavigation = props => {
  const { workData, currentPage, navigateToComponent } = props;

  const createNavigation = (selected, workData) => {
    const navigation = workData.map(item => (
      <ProjectNavItem
        key={item.id}
        isSelected={selected === item.id ? 'selected' : null}
        itemNumber={item.id}
        navigateToComponent={navigateToComponent}
      />
    ));
    return navigation;
  };

  return (
    <div className="project-navigation">
      {createNavigation(currentPage, workData)}
      {/* <ProjectNavItem url={workData.id} /> */}
    </div>
  );
};

export default ProjectNavigation;
