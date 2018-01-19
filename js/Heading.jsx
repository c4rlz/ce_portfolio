import React from 'react';

const Home = props => {
  return (
    <div className="page-heading">
      <h1> {props.heading} </h1>
      <h4> {props.subheading} </h4>
    </div>
  );
};

export default Home;
