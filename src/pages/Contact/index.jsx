import React from 'react';
import pdf from '../../../public/files/cv-rubens.pdf';

import './Contact.css';

const Contact = () => {
  function openPDF() {
    window.open(`${pdf}`, '_blank');
  }

  return (
    <div className="container text-center" id="contact">
      <div className="section-contact">
        <p>
          <span className="span-contact">04. </span>What's Next?
        </p>
        <h2 className="title-contact">Get In Touch</h2>
        <p className="p-contact">
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <button
          onClick={openPDF}
          type="button"
          className="btn"
          style={{ marginBottom: '5rem;' }}
        >
          Resumo
        </button>
      </div>
    </div>
  );
};

export default Contact;
