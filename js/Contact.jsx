import React from 'react';
import Heading from './Heading';
import Github from './Github';

const Contact = () => {
  // TO DO: CONTACT FORM
  return (
    <div className="contact main-content">
      <Heading
        heading="Let's Chat"
        subheading="ewasiuk.carly@gmail.com"
        icon={<i className="far fa-envelope" />}
      />
      <a href='http://github.com/c4rlz'><Github /></a>
      <div className='linked-in'>
      <a href='https://www.linkedin.com/in/carly-ewasiuk'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg></a>
      </div>
    </div>
  );
};

export default Contact;
