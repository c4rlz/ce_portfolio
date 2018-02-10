import React from 'react';

const Heading = props => {
  const checkDescription = () =>
    props.description ? <p> {props.description} </p> : null;
  return (
    <div className="page-heading">
      <h1> {props.heading} </h1>
      <h4> {props.subheading} </h4>
      {checkDescription()}
    </div>
  );
};

export default Heading;
