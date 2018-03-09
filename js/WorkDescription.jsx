import React from 'react';

const WorkDescription = props => {
  // for later if I need to add more paragraphs... for now I don't care
  // const showParagraphs = description => {
  //   description.map(item => {
  //     return `<h1>${item.heading}</h1>
  //     <p> ${item.details}</p>`;
  //   });
  // };
  return (
    <div className="work-description">
      <h4 className="uppercase">{props.title}</h4>
      <p> {props.description} </p>
      <div className="line" />
    </div>
  );
};

export default WorkDescription;
