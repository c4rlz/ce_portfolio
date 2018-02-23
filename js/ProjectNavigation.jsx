import React from 'react';
import ProjectNavItem from './ProjectNavItem';

const ProjectNavigation = props => {
  console.log(props);
  const { workData, currentPage, navigateToComponent } = props;

  const createNavigation = (selected, workData) => {
    const navigation = workData.map(item => (
      <ProjectNavItem
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
  // const createNavigation = (selected, howMany) => {
  //   const myProjNav = [];
  //   let i = 0;
  //   while (i < howMany) {
  //     myProjNav.push(<i className="far fa-circle" />);
  //     i += 1;
  //   }
  //   console.log(myProjNav.join(' '));
  // };
  // return (
  //   <div className="project-navigation">
  //     {createNavigation(1, 6)}
  //   </div>
  // );
};

export default ProjectNavigation;
