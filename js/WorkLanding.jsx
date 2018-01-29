import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Heading from './Heading';
import WorkItemMobile from './WorkItemMobile';
import ProgressBar from './ProgressBar';

class WorkLanding extends Component {
  state = {
    page: 0
  };

  // renderWorkItem = (works, i) => {
  //   return (
  //     <Link to={`/work-details/${i}`}>
  //       <div className={`main-content main-content-${i}`}>
  //         <Heading heading={work.name} subheading={work.description} />
  //         <WorkItem />
  //       </div>
  //     </Link>
  //   );

  // };
  renderWorkItems = works => {
    const fullWorks = works.map((work, i) => {
      return (
        <Link
          to={`/work-details/${i}`}
          style={{ textDecoration: 'none' }}
          key={work.id}
        >
          <div className={`main-content work-${work.id}`}>
            <Heading heading={work.name} subheading={work.description} />
            <WorkItemMobile />
          </div>
        </Link>
      );
    });
    return fullWorks;
  };
  render() {
    const { workData } = this.props;
    const { page } = this.state;
    return (
      <div>
        {this.renderWorkItems(workData)}
        <ProgressBar />
      </div>
    );
  }
}

export default WorkLanding;
