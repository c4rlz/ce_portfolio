import React from 'react';

const SkillDescription = props => {
  return (
    <div className="skill">
      <h4> {props.title} </h4>
      <p> {props.description} </p>
    </div>
  );
};

export default SkillDescription;
