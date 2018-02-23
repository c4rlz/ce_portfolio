import React from 'react';
import Heading from './Heading';

const Contact = () => {
  return (
    <div className="contact main-content">
      <Heading
        heading="Let's Chat"
        subheading="ewasiuk.carly@gmail.com"
        icon={<i className="far fa-envelope" />}
      />
    </div>
  );
};

export default Contact;
