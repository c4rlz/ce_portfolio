import React from 'react';
import { Link } from 'react-router-dom';
import WorkItemDesktop from './WorkItemDesktop';
import TechnologiesUsed from './TechnologiesUsed';
import WorkDescription from './WorkDescription';
import WebsiteLink from './WebsiteLink';
import WorkList from './WorkList';

const WorkDetails = props => {
  const { selectedWork, numberOfWorks } = props;
  console.log(numberOfWorks);
  const selectedColour = '#ACDDF3';
  const { id: selected } = selectedWork;
  console.log(selected - 1, selected + 1);
  const previous = parseInt(selected - 1, 10) > -1
    ? parseInt(selected - 1, 10)
    : '/work';
  const next = parseInt(selected + 1, 10) < numberOfWorks
    ? parseInt(selected + 1, 10)
    : '/contact';

  const createProjectNavigation = () => {
    console.log(previous, next);
    return (
      <div className="bottom-navigation">
        <Link
          id="previous"
          to={isNaN(previous) ? previous : `/work/${previous}`}
        >
          {isNaN(previous) ? ' Back To Works ' : 'Previous '}
        </Link>
        <Link id="next" to={isNaN(next) ? next : `/work/${next}`}>
          {isNaN(next) ? ' Contact' : 'Next '}
        </Link>
      </div>
    );
  };

  return (
    <section className={`work-${selectedWork.id}`}>
      <svg
        className="triangle-svg"
        viewBox="0 0 1556 998"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Desktop-HD-Copy"
            transform="translate(-440.000000, 0.000000)"
            fill={selectedColour}
          >
            <polygon id="Path-22" points="440.5 0 1996 997.5 1996 0" />
          </g>
        </g>
      </svg>
      <div className={`work-details-header`} />
      <div className="content-width">
        <div className="work-page-heading">
          <Link className="back-button" to="/work">
            <i className="fa fa-arrow-alt-circle-left" />
          </Link>
          <h1> {selectedWork.name} </h1>
        </div>
        <TechnologiesUsed technology={selectedWork.technology} />
        <section className="project-details">
          <WorkDescription
            title="Description"
            description={selectedWork.details}
          />
          <WorkList title="My Roles" items={selectedWork.role} />
          {/* <WorkDescription title="My Role" description={selectedWork.role} /> */}
          {/* <WorkDescription
                title="Functionality"
                description={selectedWork.functionality}
              /> */}

          <WorkList title="Functionality" items={selectedWork.functionality} />

          {/* <WebsiteLink link={selectedWork.url} /> */}
          <div>
            <a href={selectedWork.url}>
              <WorkItemDesktop
                projectName={selectedWork.name}
                screen={selectedWork.images[1]}
              />
            </a>
          </div>
        </section>

      </div>
      {createProjectNavigation()}
      {/* <Link to={`/work/${previous}`}>Previous</Link>
      <Link to={`/work/${next}`}>Next </Link> */}
    </section>
  );
};

export default WorkDetails;
