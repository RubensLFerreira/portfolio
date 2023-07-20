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
          <span className="span-contact">04. </span>Qual é o próximo?
        </p>
        <h2 className="title-contact">Entrar em contato</h2>
        <p className="p-contact">
          Estou em busca da minha primeira oportunidade na área, fique à vontade para entrar em contato ou compartilhar.
        </p>
        <button
          onClick={openPDF}
          type="button"
          className="btn"
          style={{ marginBottom: '5rem;' }}
        >
          Currículo
        </button>
      </div>
    </div>
  );
};

export default Contact;
