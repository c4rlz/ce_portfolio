import React from 'react';
import { Link } from 'react-router-dom';
// import WheelReact from 'wheel-react';
// import Nav from './Nav';
import Fade from './TextTransition';
import Heading from './Heading';
import {
  TransitionGroup,
  Transition,
  CSSTransition
} from 'react-transition-group';

const Landing = () => {
  const timeout = { enter: 1000, exit: 100 };
  const description =
    'I`m crazy about JavaScript. I have a thirst for knowledge and growth. A creative & innovative mind. I seem to have a knack for finding bugs.';
  return (
    <div className="gradient-overlay">
      <section className="landing">
        {/* <TransitionGroup>
          <CSSTransition timeout={timeout} classNames="animate"> */}
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
                <rect
                  id="Rectangle-2"
                  fill="#F8EFEF"
                  x="0"
                  y="0"
                  width="1996.57015"
                  height="1063.8449"
                />
                <polygon
                  id="Path-4"
                  fill="#5E9DBA"
                  points="1.11790042 0 1.11790042 542.744161 598.076724 0"
                />
                <polygon
                  id="Path-3"
                  fill="#C660B5"
                  points="593.605123 0 1.11790042 542.744161 1292.29288 870.55545"
                />
                <polygon
                  id="Path-5"
                  fill="#574A86"
                  points="593.605123 0 1292.29288 870.55545 1995.45225 0.773139831"
                />
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
                <polygon
                  id="Path-19"
                  stroke="#979797"
                  fill="#574A86"
                  points="0.843346534 539.5 0.843346534 933 582.343347 686.5"
                />
                <animate
                  attributeName="opacity"
                  // type="scale"
                  to="1"
                  begin="-1s"
                  dur="2s"
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
        {/* </CSSTransition>
        </TransitionGroup> */}

        <div className="home-hero">
          <Fade heading="Carly Ewasiuk" subheading="Front-End Developer" />
        </div>

        <svg
          preserveAspectRatio="xMinYMin meet"
          className="svg-content-1"
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
                  id="Path-4"
                  fill="#5E9DBA"
                  points="1.11790042 0 1.11790042 542.744161 598.076724 0"
                />
                <polygon
                  id="Path-3"
                  fill="#C660B5"
                  points="593.605123 0 1.11790042 542.744161 1292.29288 870.55545"
                />
                <polygon
                  id="Path-5"
                  fill="#574A86"
                  points="593.605123 0 1292.29288 870.55545 1995.45225 0.773139831"
                />
                <polygon
                  id="Path-6"
                  fill="#5E9DBA"
                  points="1292.29288 870.55545 1995.45225 658.903271 1995.45225 0.773139831"
                />

                <animate
                  attributeName="rotate"
                  // type="scale"
                  to="180"
                  begin="1s"
                  dur="2s"
                />
              </g>
            </g>
          </g>
        </svg>
      </section>

    </div>
  );
};

export default Landing;
