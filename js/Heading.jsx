import React from 'react';

const Heading = props => {
  const { description, icon, subheading, heading } = props;
  const checkDescription = () => (description ? <p> {description} </p> : null);

  const checkIcon = () =>
    icon ? <h4> {icon} {subheading} </h4> : <h4> {subheading} </h4>;

  return (
    <div className="page-heading">
      <h1> {heading} </h1>
      {checkIcon()}
      {/* <h4> {props.subheading} </h4> */}
      {checkDescription()}
    </div>
  );
};

export default Heading;
