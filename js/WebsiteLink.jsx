import React from 'react';

const WebsiteLink = props => {
  return (
    <a className="website-link" href={props.link}><h2> View Project</h2></a>
  );
};

export default WebsiteLink;
