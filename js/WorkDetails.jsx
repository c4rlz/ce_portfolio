import React from 'react';
import { Link } from 'react-router-dom';
import WorkItemDesktop from './WorkItemDesktop';
import TechnologiesUsed from './TechnologiesUsed';
import WorkDescription from './WorkDescription';
import WebsiteLink from './WebsiteLink';

const WorkDetails = props => {
  const { selectedWork } = props;
  console.log(selectedWork);

  return (
    <section>
      <div className={`work-details-header work-${selectedWork.id}`} />
      <div className="content-width">
        <div className="work-page-heading">
          <Link className="back-button" to="/work">
            <i className="fas fa-arrow-alt-circle-left" />
          </Link>
          <h1> {selectedWork.name} </h1>
          <h4> {selectedWork.description} </h4>
        </div>

        <div>
          <WorkItemDesktop projectName={selectedWork.name} />
        </div>
        <TechnologiesUsed technology={selectedWork.technology} />
        <WorkDescription description={selectedWork.details} />
        <WebsiteLink link={selectedWork.url} />
      </div>
    </section>
  );
};

export default WorkDetails;
