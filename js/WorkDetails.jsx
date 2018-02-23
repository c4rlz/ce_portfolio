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
    <section className={`work-${selectedWork.id}`}>
      <div className={`work-details-header`} />
      <div className="content-width">
        <div className="work-page-heading">
          <Link className="back-button" to="/work">
            <i className="fa fa-arrow-alt-circle-left" />
          </Link>
          <h1> {selectedWork.name} </h1>
        </div>

        <div>
          <WorkItemDesktop projectName={selectedWork.name} />
        </div>
        <TechnologiesUsed technology={selectedWork.technology} />
        <WorkDescription
          title="Description"
          description={selectedWork.details}
        />
        <WorkDescription title="My Role" description={selectedWork.role} />
        <WorkDescription
          title="Functionality"
          description={selectedWork.functionality}
        />

        <WebsiteLink link={selectedWork.url} />
      </div>
    </section>
  );
};

export default WorkDetails;
