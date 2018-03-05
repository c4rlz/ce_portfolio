import React from 'react';
import { Link } from 'react-router-dom';
import WorkItemDesktop from './WorkItemDesktop';
import TechnologiesUsed from './TechnologiesUsed';
import WorkDescription from './WorkDescription';
import WebsiteLink from './WebsiteLink';

const WorkDetails = props => {
  const { selectedWork } = props;
  return (
    <section className={`work-${selectedWork.id}`}>
      <svg
        preserveAspectRatio="xMinYMin meet"
        className="svg-content"
        viewBox="0 0 1900 1900"
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
          <g id="Desktop-HD">
            <g id="Group-Copy" transform="translate(-0.843347, -4.000000)">
              <polygon
                id="Path-6"
                fill="#5E9DBA"
                points="1292.29288 870.55545 1995.45225 658.903271 1995.45225 0.773139831"
              />
              <polygon
                id="Path-7"
                fill="#574A86"
                points="1995.45225 658.715136 1292.29288 870.588293 1994.33435 1060.00755"
              />
              {/* <text
                  id="CARLY-EWASIUK"
                  className="svg-text"
                  // repeatCount="indefinite"
                  fontFamily="JosefinSans-Bold, Josefin Sans"
                  fontSize="90"
                  fontWeight="bold"
                  // opacity="0"
                  fill="#FFF9F2"
                >
                  <tspan x="564.845664" y="461">CARLY EWASIUK</tspan>
                </text>
                <text
                  id="FRONT-END-DEVELOPER"
                  fontFamily="JosefinSans-Bold, Josefin Sans"
                  className="svg-text"
                  fontSize="40"
                  // opacity="0"
                  fontWeight="bold"
                  fill="#FFF9F2"
                >
                  <tspan x="676.345664" y="522">FRONT END DEVELOPER </tspan>
                </text> */}
            </g>
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

        <div>
          <WorkItemDesktop
            projectName={selectedWork.name}
            screen={selectedWork.images[1]}
          />
        </div>
        <WorkDescription
          title="Description"
          description={selectedWork.details}
        />
        {/* <TechnologiesUsed technology={selectedWork.technology} />
        <WorkDescription
          title="Description"
          description={selectedWork.details}
        /> */}
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
